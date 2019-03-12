import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CostumerPage } from '../costumer/costumer';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  user: string;
  data: any;
  money:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.data;
    this.user=this.navParams.get('user');
    this.money=this.navParams.get('money');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  back(){
    this.navCtrl.pop();
  }
  forward(){
    this.navCtrl.push(CostumerPage);
  }
}
