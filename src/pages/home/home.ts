import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public opcoes: any;
  public dadosLidos: any;
  public codigo: any;
  public formato: any;
  public retorno: any;
  todo = {}


  constructor(
    public navCtrl: NavController,
    private barcode: BarcodeScanner,
    public http: HttpClient,
    public loadingController: LoadingController
    ) {

  }


  logForm() {
    // retorna o que vem do formulário
    console.log(this.todo)
    this.http.post("http://localhost/cadastros/cadastros.php", this.todo)

    .subscribe(data => {
      //console.log(data['message']);
      if(data['message'] == 1){
        this.retorno = "Tudo Certinho!";
        this.navCtrl.push(ContactPage);
      }else{
        this.retorno = "Tente Novamente!";
      }
     }, error => {
      console.log(error);
    });
  }

  Encode(){
      var TextToEncode = window.prompt("Escreva aqui");
      this.barcode.encode(this.barcode.Encode.TEXT_TYPE,TextToEncode)
      .then((data)=>{
        alert(JSON.stringify(data));
      },(err)=>{
        alert(JSON.stringify(err));
      }

      )
  }

  Scan(){
    this.dadosLidos = null;
      this.barcode.scan().then((barcodeData)=>{
        //alert(barcodeData.text);
        this.dadosLidos = barcodeData;
          this.codigo = barcodeData.text;
          this.formato = barcodeData.format;
      },(err)=>{
        alert(JSON.stringify(err));
    })
  }

}
