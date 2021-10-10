import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  signup(email: any, password: any) {

    this.afAuth.auth.craeteUserwithEmailAndPassword(email,password)

  }

  login 
  logout
}
