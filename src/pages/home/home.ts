import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginProvider } from '../../providers/login/login';
import { EventManager } from '@angular/platform-browser';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:string;
  pwd:string;
  cursos:string[]=['Ionic','Angular','Docker'];
  loginForm: FormGroup;
  constructor(public navCtrl: NavController,
    private fb:FormBuilder,
    private login_provider: LoginProvider,
    private events_manager: EventManagerProvider ) {
    this.loginForm= this.fb.group({
      user:['',Validators.required],
      pwd:['',Validators.required]
    })
  }

  goAbout(){
    let data = {user:this.loginForm.get('user').value,pwd:this.pwd,courses:this.cursos,date: new Date(),}
    this.navCtrl.push(AboutPage,data);
  }
  goCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
  Login(){
    this.events_manager.setIsLoading(true);
    
    this.login_provider
        .LoginService(
          this.loginForm.get('user').value,
          this.loginForm.get('pwd').value
        ).subscribe((response) => {
          console.log(response);
          this.events_manager.setIsLoading(false);
          this.goAbout();
        }, error => {
          this.events_manager.setIsLoading(false);
          this.events_manager.setMsgToast(error.error.message);
        });
  }
}
