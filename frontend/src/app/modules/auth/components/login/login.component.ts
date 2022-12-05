import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JWTTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(
    private jwtToken: JWTTokenService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginFormGroup = this.buildFormGroup();
    this._patchFormGroup();
  }

  ngOnInit(): void {}

  public loginClicked() {
    this.authService.login(this.loginFormGroup.value).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/dashboard']);
      this.jwtToken.setCurrentUser(response.token);
    });
  }

  private buildFormGroup() {
    return this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  private _patchFormGroup() {
    this.loginFormGroup.patchValue({
      username: 'mihaifirst',
      password: 'alexmihai',
    });
  }
}
