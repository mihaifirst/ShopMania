import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { JWTTokenService } from './modules/auth/services/jwt-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private router: Router, private jwtService: JWTTokenService) {}

  ngOnInit() {
    if (this.jwtService.isTokenOnLocalStorage()) {
      this.jwtService.initializeToken();
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
