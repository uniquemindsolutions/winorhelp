import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-registraion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registraion.component.html',
  styleUrl: './registraion.component.css'
})
export class RegistraionComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    
      this.submitted = true;

      // reset alerts on submit
      //this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
        alert("hiii")
          return;
      }
      alert("hiii")
      this.loading = true;
      // this.accountService.register(this.form.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
      //             this.router.navigate(['../login'], { relativeTo: this.route });
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }
}
