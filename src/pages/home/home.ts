import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:string;
  group:string;
  cursos:string[]=['ionic','angulas','docker','liquibase'];
  money: number;
  constructor(public navCtrl: NavController, navParams: NavParams) {
  }

  goAbout(){
    let data = {user:this.user,group:this.group,courses:this.cursos,date: new Date(),money:this.money}
    this.navCtrl.push(AboutPage,data);
  }
}
