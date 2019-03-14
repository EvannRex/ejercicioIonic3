import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CostumerPage } from '../pages/costumer/costumer';
import { PipesModule } from '../pipes/pipes.module';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { LoginProviderMock } from '../mock/loginProviderMock';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
import { CardComponent } from '../components/card/card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CostumerPage,
    CreateAccountPage,
    CardComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CostumerPage,
    CreateAccountPage,
    CardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider,
    LoginProvider,
    EventManagerProvider
    //{
      //provide:LoginProvider,
      //useClass: LoginProviderMock
    //}
  ]
})
export class AppModule {}
