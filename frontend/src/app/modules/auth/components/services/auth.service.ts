import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL = 'http://localhost:3000/api/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  public login(body: any) {
    return this.http.post(`${URL}/login`, body);
  }

  public register(body: any) {
    return this.http.post(`${URL}/register`, body);
  }
}
