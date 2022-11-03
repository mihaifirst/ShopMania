import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {}

  public loginClicked() {
    this.authService.login(this.loginFormGroup.value).subscribe();
  }

  private buildFormGroup() {
    return this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
}