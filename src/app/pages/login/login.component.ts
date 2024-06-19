import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  borderColorUser: string = 'border-gray-300';
  borderFocusColorUser: string = 'focus:border-blue-500';
  borderColorPassword: string = 'border-gray-300';
  borderFocusColorPassword: string = 'focus:border-blue-500';
  displayAlert: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  setBorderColorUser(color: string) {
    this.borderColorUser = color;
  }

  setBorderFocusColorUser(color: string) {
    this.borderFocusColorUser = color;
  }

  setBorderColorPassword(color: string) {
    this.borderColorPassword = color;
  }

  setBorderFocusColorPassword(color: string) {
    this.borderFocusColorPassword = color;
  }

  getBorderColorUser() {
    return this.borderColorUser;
  }

  getBorderFocusColorUser() {
    return this.borderFocusColorUser;
  }

  getBorderColorPassword() {
    return this.borderColorPassword;
  }

  getBorderFocusColorPassword() {
    return this.borderFocusColorPassword;
  }

  setDisplayAlert(display: boolean) {
    this.displayAlert = display;
  }

  dismissAlert() {
    this.displayAlert = true;
  }

  dissmissAlertClose() {
    this.displayAlert = false;
  }

  

  onSubmit(loginForm: NgForm): void {
    this.getBorderColorUser();
    this.getBorderFocusColorUser();
    this.getBorderColorPassword();
    this.getBorderFocusColorPassword();

    if (loginForm.valid) {
      if(this.username === 'admin' && this.password === 'admin2024' ){
        
        this.authService.setToken('mFqPSClesU92gtbgRrEUU5RjYejr9WID30EgOwkhv2vkDBJxD0gTRWgfW5GX7sfd');
        if(this.authService.isAuth()){
          this.router.navigate(['/home']);
        }
      }else{
        this.dismissAlert();
      }
    } 
    else {

      if(loginForm.controls['usuario'].value === '' && loginForm.controls['password'].value === '') {
        this.setBorderColorUser('border-red-500');
        this.setBorderFocusColorUser('focus:border-red-500');
        this.setBorderColorPassword('border-red-500');
        this.setBorderFocusColorPassword('focus:border-red-500');
      }

    }
  }
  
}
