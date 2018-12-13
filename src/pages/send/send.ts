import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EosProvider } from '../../providers/eos/eos';
import { EtheriumProvider } from '../../providers/etherium';

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
  cameraPermission: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private etheriumProvider: EtheriumProvider) {    
    // this.prepare();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendPage');
  }

  // prepare() {
  //   // Optionally request the permission early
  //   this.barcodeScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted
  //         this.cameraPermission = true;

  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //         this.cameraPermission = false;
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //         this.cameraPermission = false;
  //       }
  //     })
  //     .catch((e: any) => console.log('Error is', e));
  // }

  qrCodeScan() {
    console.log("qrCodeScan enter");
    // start scanning
    // let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //   console.log('Scanned something', text);

    //   this.qrScanner.hide(); // hide camera preview
    //   scanSub.unsubscribe(); // stop scanning
    // });

    // this.qrScanner.show();

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.account = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  send() {
    this.etheriumProvider.transfer(this.account, Number.parseFloat(this.value))
      .then(result => this.navCtrl.pop())
      .catch(err => alert(err));
  }

}
