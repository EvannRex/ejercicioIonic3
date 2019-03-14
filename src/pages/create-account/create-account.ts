import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentServiceProvider } from '../../providers/student-service/student-service';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  createAccountForm: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder,
    private student_provider: StudentServiceProvider,
    private loading: LoadingController) {
      this.createAccountForm=this.fb.group({
        name:['',Validators.required],
        app:['',Validators.required],
        apm:[''],
        email:['',[Validators.required,Validators.email]],
        matricula:['',Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
  goHome(){
    this.navCtrl.pop();
  }
  crearCuenta(){
    let presentLoading= this.loading.create({
    content: 'Espere por favor'
    });
    let accountInfo: Students= this.createAccountForm.getRawValue();
    this.student_provider
        .createAccountStudent(accountInfo)
        .subscribe( () => {
          console.log('data');
        }, error => {
          presentLoading.dismiss()
          console.log('error',error);
        },()=> {
          console.log('succes');
          presentLoading.dismiss()
        })
  }
}
