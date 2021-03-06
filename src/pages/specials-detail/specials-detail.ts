import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SpecialsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specials-detail',
  templateUrl: 'specials-detail.html',
})
export class SpecialsDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {

  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText("Specials");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsDetailPage');
  }

}
