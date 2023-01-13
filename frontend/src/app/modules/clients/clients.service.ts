import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../shared/interfaces/clients.interface';

const apiUrl = 'http://localhost:3000/api/clients';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  public clientId = '';

  constructor(private http: HttpClient) {}

  public getClients(): Observable<ClientInterface[]> {
    return this.http.get<ClientInterface[]>(apiUrl);
  }

  public createClient(
    body: Partial<ClientInterface>
  ): Observable<ClientInterface> {
    return this.http.post<ClientInterface>(apiUrl, body);
  }

  public deleteClient(id: string): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
