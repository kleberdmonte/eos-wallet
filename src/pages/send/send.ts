import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  account: string;
  value: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = navParams.get('account');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

}
