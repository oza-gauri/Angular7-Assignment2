import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['',Validators.pattern('^[a-zA-Z]+$')],
    email:['',Validators.email],
    userName:['',Validators.pattern('^[a-zA-Z]+$')],
    password:['',Validators.minLength(7)],
    qualification: this.fb.group({
    education:['',Validators.required],
    college:['',Validators.required],
    university:['',Validators.required]
    }),
    address: this.fb.group({
    add1: ['',Validators.required],
    add2: ['',Validators.required],
    city: ['',Validators.required],
    state: ['',Validators.required],
    country: ['',Validators.required]
    }),
  });
  constructor(private fb: FormBuilder) { }
  onSubmit () {
    console.warn(this.profileForm.value);
  }
}
