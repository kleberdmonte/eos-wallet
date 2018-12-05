import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  account: string = "novaturma112";
  key: string = "5KTLYYkmHiegLShdcgDbRpPEVX42hMgBM6Ce4zJDbR2jseHQnHo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage, { account: this.account, key: this.key });
  }

}
