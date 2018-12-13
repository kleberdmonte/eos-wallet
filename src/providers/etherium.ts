import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenContract.json');

@Injectable()
export class EtheriumProvider {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0xD51Cf4816acAff82177f16B2CD2983698Aa6d41d";

  apiUrl: string = "https://api.coinmarketcap.com/v2/ticker/1027/";

  constructor(public http: HttpClient) {
    console.log('Hello EtheriumProvider Provider');

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

      this._web3.eth.net.getNetworkType()
        .then(network => {
          if (network !== 'rinkeby') {
            alert('Please connect to the Rinkeby network');
          }
        })
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = new this._web3.eth.Contract(tokenAbi, this._tokenContractAddress);
  }

  public async getEtheriumToUSD(value: number) {
    return new Promise<string>(resolve => {
      this.http.get(this.apiUrl).subscribe(result => {
        const usdValue = (result["data"].quotes.USD.price * value).toFixed(2);
        resolve(usdValue);
      }, err => {
        console.log(err);
      });
    });
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
  
    return new Promise<number>((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.methods.balanceOf(account).call(function (err, result) {
        if(err != null) {
          reject(err);
        }
  
        resolve(_web3.utils.fromWei(result));
      });
    });
  }

  public async transfer(account: string, value: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.methods.transfer(account, value).call(function (err, result) {
        if(err != null) {
          reject(false);
        }
  
        resolve(true);
      });
    });
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }
}
