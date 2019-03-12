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
  cursos:string[]=['Ionic','Angular','Docker','Liquibase','Rest'];
  money: number;
  constructor(public navCtrl: NavController, navParams: NavParams) {
  }

  goAbout(){
    let data = {user:this.user,group:this.group,courses:this.cursos,date: new Date(),money:this.money}
    this.navCtrl.push(AboutPage,data);
  }
}
