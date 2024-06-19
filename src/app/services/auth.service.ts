import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';

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
