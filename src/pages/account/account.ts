import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EtheriumProvider } from '../../providers/etherium';

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

  account: string = "0x89DDdE9b53fDD23A6c51c3dA0b34B8BCC2a77b95";
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
