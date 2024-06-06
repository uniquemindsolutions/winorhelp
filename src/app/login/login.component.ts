import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommanService } from '../comman.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login!: FormGroup;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService:CommanService
  ) { }

  ngOnInit() {
    localStorage.setItem("loginsession","false");
    this.login = this.formBuilder.group({
      email: ['', [Validators.required]],
       password: ['', [Validators.required]],
      
    });
}

// convenience getter for easy access to form fields
get f() {
  return this.login.controls;
}


  onSubmit(): void {

    this.submitted = true;

    if (this.login.invalid) {
      console.log(this.login)
      alert('Login Failed!');
      return;
    }else{
      this.submitted = false;
      console.log(this.login.value)
      
      const formValuesJson = JSON.stringify(this.login.value);
      this.authService.login(this.login.value).subscribe(
        response => {
          alert('Login successful!');
          localStorage.setItem("loginsession","true");
          this.router.navigate(['/home']);
        },
        error => {
          alert('Login failed. Please try again.');
        }
      );
    }

  }

}
