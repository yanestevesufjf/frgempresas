import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  constructor(public core: CoreService) { }

  ngOnInit() {
  }

}
