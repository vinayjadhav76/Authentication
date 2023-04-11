import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private authservice: AuthService, private router: Router) { }

  registerForm = this.builder.group({
    id: this.builder.control([''],Validators.required),
    name: this.builder.control([''], Validators.required),
    password: this.builder.control([''], Validators.required),
    email: this.builder.control([''], Validators.required),
    gender: this.builder.control(['male'],Validators.required),
    role: this.builder.control(['']),
    isactive: this.builder.control(false)
  })

  proceedRegistration() {
    if (this.registerForm.valid) {
      this.authservice.proceedRegister(this.registerForm.value).subscribe((res) => {
        this.toastr.success("Please contact admin for enable access", "Register Successfully")
        this.router.navigate(['login'])
        console.warn(this.registerForm.value);
        
      })
    } else {
      this.toastr.warning('Please Enter Valid Data')
    }
  }

}
