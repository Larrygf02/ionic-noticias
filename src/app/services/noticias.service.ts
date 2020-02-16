import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52111ad9d24a49868937addc697e6b11`)
  }

}
