import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const URL = 'http://localhost:3000/api/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  public login(body: any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${URL}/login`, body);
  }

  public register(body: any) {
    return this.http.post(`${URL}/register`, body);
  }
}
