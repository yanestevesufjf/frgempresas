import { ComponentRef, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificacoesPage } from '../notificacoes/notificacoes.page';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  destinosPopulares: any[] = [];
  topDestinos: any[] = [];
  categorias: any[] = [];
  notificacoes: any[] = [];

  constructor(public modalController: ModalController,
    public web: WebService) {
      this.getData();
  }

  getData() {
    this.web.get('lugares').then((data: any) => {
      this.destinosPopulares = [];
      this.destinosPopulares = data.populares;
      this.topDestinos = [];
      this.topDestinos = data.top_destinos;
    });

    this.web.get('notificacoes').then((data: any) => {
      this.notificacoes = [];
      this.notificacoes = data.notificacoes
    });
  }


  public async abreModal(screen) {
    console.log('core::abreModal::' + screen);
    const modal = await this.modalController.create({
      component: NotificacoesPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  public async fechaModal() {
    this.modalController.dismiss();
  }
}
