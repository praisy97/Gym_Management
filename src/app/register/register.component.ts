import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  showSuccessMessage = false;
  showDialog = false;
  dialogMessage = '';
  dialogTitle = '';
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      package: ['', Validators.required],
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
else{
    this.showSuccessMessage = true;
      this.dialogTitle = 'Thank You! for Registering';
      this.dialogMessage = 'Our team will contact you soon.';
      this.showDialog = true; 
     }
  }
  closeDialog() {
    this.showDialog = false;
    if (this.dialogTitle === 'Thank You! for Registering') {
      this.router.navigate(['/']);
  }
}
}
