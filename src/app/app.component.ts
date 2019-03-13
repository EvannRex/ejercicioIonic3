import { Component } from '@angular/core';
import { Platform, Loading, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loading: Loading;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private loadingCtrl: LoadingController,
    private events_provider: EventManagerProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.loading= this.loadingCtrl.create({
        content: 'espera por favor...'
      });

      this.events_provider
          .getIsLoading()
          .subscribe((isLoading) =>{
            if(isLoading){
              this.loading.present();
            }else{
              this.loading.dismiss();
            }
          });
    });
  }
}

