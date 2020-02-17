import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { browser } from 'protractor';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  constructor( private iab: InAppBrowser, private actrl: ActionSheetController ) { }

  ngOnInit() {}

  abrirNoticia() {
    // abrir la noticia en el dispositivo
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {
    const actionSheet = await this.actrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share cliked');
        }
      },{
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    })
    await actionSheet.present()
  }
}
