import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  borderColorUser: string = 'border-gray-300';
  borderFocusColorUser: string = 'focus:border-blue-500';
  borderColorPassword: string = 'border-gray-300';
  borderFocusColorPassword: string = 'focus:border-blue-500';

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

  onSubmit(loginForm: NgForm): void {
    this.getBorderColorUser();
    this.getBorderFocusColorUser();
    this.getBorderColorPassword();
    this.getBorderFocusColorPassword();

    if (loginForm.valid) {
      if(loginForm.value.username == 'admin' && loginForm.value.password == 'admin'){
        
      }
      console.log('Form Submitted', loginForm.value);
    } else {

      if(loginForm.controls['usuario'].value === '' && loginForm.controls['password'].value === '') {
        this.setBorderColorUser('border-red-500');
        this.setBorderFocusColorUser('focus:border-red-500');
        this.setBorderColorPassword('border-red-500');
        this.setBorderFocusColorPassword('focus:border-red-500');
      }

     


      console.error('Form Invalid');
    }
  }
  
}
