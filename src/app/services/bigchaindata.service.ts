import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BigchaindataService {
  username: string;
  constructor() {

  }

  generateHashcode(secretKey: string) {
    //if (typeof secretKey == "undefined" || secretKey == "") return new this.driver.Ed25519Keypair();
    //return new this.driver.Ed25519Keypair(this.bip39.mnemonicToSeed(secretKey).slice(0, 32));
  }

  setUserId(username: string) {
    this.username = username;
  }
}
