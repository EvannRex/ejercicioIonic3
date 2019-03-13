import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CREATE_USER } from '../../endpoints/endpoints';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentServiceProvider Provider');
    
  }
  createAccountStudent(account: Students){
    return this.http.post(CREATE_USER,account);
    }
}
