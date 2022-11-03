import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {}

  public registerClicked() {
    this.authService
      .register(this.registerFormGroup.value)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['./auth/login']);
      });
  }

  private buildFormGroup() {
    return this.formBuilder.group({
      fullName: this.formBuilder.control('', Validators.required),
      username: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
      confirmPassword: this.formBuilder.control('', Validators.required),
    });
  }
}
