import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentServiceProvider } from '../../providers/student-service/student-service';
import { EventManager } from '@angular/platform-browser';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

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
  money: number;
  students: any[];
  colorLabel: string='secondary';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private student_provider: StudentServiceProvider,
    private event_manager: EventManagerProvider) {
    this.data=this.navParams.data;
    this.user=this.navParams.get('user');
    this.student_provider
        .getStudents()
        .subscribe((response: any)=>{
          this.students= response;
          console.log(this.students);
        }, error => {
          console.log(error);
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  back(){
    this.navCtrl.pop();
  }
  
  deleteUsuario(usuario){
    this.event_manager.setIsLoading(false);
    this.student_provider
    .deleteStudent(usuario.id)
    .subscribe(() =>{ 
      this.students= this.students.filter(item => usuario.id != item);
      this.event_manager.setMsgToast('se elimino correctamente');
    },error =>{
      this.event_manager.setIsLoading(false);
      this.event_manager.setMsgToast(error.error);
    });
  
  }
  
}
