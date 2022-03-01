import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // name = 'Aasim';
  // siteUrl = window.location.href;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.loginForm.value);
    // // document.write(this.name);
    // document.write(this.siteUrl);
    // console.log(this.name);

    if (this.loginForm.invalid) {
      // this.loginForm.markAllAsTouched();

      return;
    }
    localStorage.setItem('login', JSON.stringify(this.loginForm.value));
    this.router.navigate(['home']);
  }
  get password() {
    return this.loginForm.get('password');
  }
}
