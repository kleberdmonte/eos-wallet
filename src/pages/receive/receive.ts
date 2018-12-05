import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {

  qrData: string;
  createdCode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qrData = navParams.get('account');

    this.createdCode = this.qrData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivePage');
  }
}