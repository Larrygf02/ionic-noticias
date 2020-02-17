import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  constructor() {}
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  ngOnInit() {
    //Inicializa el segment en la primera categoria
    this.segment.value = this.categorias[0];
  }
}
