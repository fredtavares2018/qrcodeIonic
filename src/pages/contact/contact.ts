import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public listagem: any;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public loadingController: LoadingController
    ) {

  }

  ngOnInit(){

      this.http.get("http://localhost/cadastros/listagem.php")
    
      .subscribe(data => {
        console.log(data);
        this.listagem = data;

       }, error => {
        console.log(error);
      });

  }

}
