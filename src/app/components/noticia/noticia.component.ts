import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { browser } from 'protractor';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {}

  abrirNoticia() {
    // abrir la noticia en el dispositivo
    const browser = this.iab.create(this.noticia.url, '_system');
  }
}
