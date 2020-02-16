import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    // en el servicio especificamos el tipo para tenerlo centralizado cuando lo queramos usar
    return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52111ad9d24a49868937addc697e6b11`)
  }

}
