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
    id: new FormControl([''],Validators.required),
    name: new FormControl([''], Validators.required),
    password: new FormControl([''], Validators.required),
    email: new FormControl([''], Validators.required),
    gender: new FormControl(['male'],Validators.required),
    role: new FormControl(['']),
    isactive: new FormControl(false)
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
