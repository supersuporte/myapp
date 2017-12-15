import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
    public objeto_feed = {
        titulo: "Carlos Gomes",
        data: "01/12/2017",
        descricao: "Este é um texto que entra no feed de conteúdo do aplicativo, que deverá vir de um objeto json do webservices. Obrigado de nada.",
        qtd_likes: 253,
        qtd_comments: 54,
        time_comments: "11h atrás"
    }

  public nomeDoUsuario:string = "Carlos Gomes.";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDeDoisNumeros(n1:number, n2:number):void {
      alert(n1+n2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDeDoisNumeros(10, 15);
  }

}
