import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SpecialsDetailPage } from '../specials-detail/specials-detail';

import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SpecialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {
  specialsDetailPage = SpecialsDetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText("Menu");
  }

}
