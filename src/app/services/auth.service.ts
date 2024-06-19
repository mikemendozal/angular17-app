import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';
  private REMEMBER_ME_KEY = 'remember_me';

  setToken(token: string){
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  constructor() { }

  isAuth(): boolean{
    return this.getToken() !== null;
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem('token');
  }

  
}
