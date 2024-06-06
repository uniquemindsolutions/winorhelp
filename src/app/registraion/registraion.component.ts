import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { CommanService } from '../comman.service';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registraion',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './registraion.component.html',
  styleUrl: './registraion.component.css'
})
export class RegistraionComponent implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService:CommanService
  ) { }

  ngOnInit() {
      this.registrationForm = this.formBuilder.group({
         username: ['', [Validators.required, Validators.minLength(3)]],
         password: ['', [Validators.required, Validators.minLength(6)]],
         email: ['', [Validators.required, Validators.email]],
         phone: ['', Validators.required],
         ref_code:''
      });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit(): void {
   
    this.submitted = true;

    if (this.registrationForm.invalid) {
      console.log(this.registrationForm)
      alert('Registration Failed!');
      return;
    }else{
      this.submitted = false;
      console.log(this.registrationForm.value)
      
      const formValuesJson = JSON.stringify(this.registrationForm.value);
      this.authService.register(this.registrationForm.value).subscribe(
        response => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        },
        error => {
          alert('Registration failed. Please try again.');
        }
      );
    }


  }
}
