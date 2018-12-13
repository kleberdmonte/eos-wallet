import { SendPage } from './../pages/send/send';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { EosProvider } from '../providers/eos/eos';
import { ReceivePage } from '../pages/receive/receive';
import { HttpClientModule } from '@angular/common/http';
import { EtheriumProvider } from '../providers/etherium';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    SendPage,
    ReceivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    SendPage,
    ReceivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EosProvider,
    BarcodeScanner,
    EtheriumProvider
  ]
})
export class AppModule {}
