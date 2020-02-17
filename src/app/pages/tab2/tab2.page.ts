import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  constructor( private noticiasService: NoticiasService) {}
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  ngOnInit() {
    //Inicializa el segment en la primera categoria
    this.segment.value = this.categorias[0];
    this.noticiasService.getTopHeadLinesCategoria(this.categorias[0])
                        .subscribe( resp => {
                          
                        })
  }
}
