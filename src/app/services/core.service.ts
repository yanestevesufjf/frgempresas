import { ComponentRef, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StoryPreviewPage } from '../story-preview/story-preview.page';
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


  public async abreModal(screen, data?) {
    console.log('core::abreModal::' + screen);
    screen = this.returnComponent(screen);

    if (!screen) {
      return false;
    }

    const modal = await this.modalController.create({
      component: screen,
      cssClass: 'my-custom-class', 
      componentProps: {
        data: data
      }
    });
    return await modal.present();
  }

  returnComponent(string) {
    switch (string) {
      case 'notificacoes':
        return NotificacoesPage;
      case 'story-preview':
        return StoryPreviewPage;
      default:
        return false;
    }
  }

  public async fechaModal() {
    this.modalController.dismiss();
  }
}
