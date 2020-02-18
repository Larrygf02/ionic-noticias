import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];
  constructor(private storage: Storage,
    public toastController: ToastController) {
    this.cargarFavoritos()
   }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present()
  }
  guardarNoticia( noticia: Article){
    console.log(noticia)
    const existe = this.noticias.find( noti => noti.title === noticia.title)
    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias )
    }
    console.log(this.noticias)
    this.presentToast(' Agregado a Favoritos')
  }

  borrarNoticia (noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title)
    this.storage.set('favoritos', this.noticias )
    this.presentToast(' Eliminado de Favoritos')
  }

  async cargarFavoritos() {
    const favoritos = await this.storage.get('favoritos')
    this.noticias = favoritos ? favoritos: [];
  }
}
