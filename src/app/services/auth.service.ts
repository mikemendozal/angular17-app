import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';

  setToken(token: string){
    this.token = token;
  }

  constructor() { }

  isAuth(){
    return this.token.length>0;
  }

  logout(){
    this.token = '';
  }
}
