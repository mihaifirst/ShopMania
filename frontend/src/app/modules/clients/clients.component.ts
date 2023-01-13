import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { ClientInterface } from '../../shared/interfaces/clients.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public clients: ClientInterface[] = [];
  public clientFormGroup!: FormGroup;

  constructor(private clientsService: ClientsService, private fb: FormBuilder) {
    this.buildClientFormGroup();
  }

  ngOnInit(): void {
    this.initClients();
  }

  private buildClientFormGroup() {
    this.clientFormGroup = this.fb.group({
      name: this.fb.control(''),
      entity: this.fb.control(''),
      cui: this.fb.control(''),
      cnp: this.fb.control(''),
      address: this.fb.control(''),
      city: this.fb.control(''),
      country: this.fb.control(''),
      zipcode: this.fb.control(''),
      contactPersonName: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      website: this.fb.control(''),
      userId: this.fb.control(''),
    });
  }

  private initClients() {
    this.clientsService
      .getClients()
      .subscribe((response: ClientInterface[]) => {
        this.clients = response;
      });
  }

  createClient() {
    console.log(this.clientFormGroup.value);
    this.clientsService
      .createClient(this.clientFormGroup.value)
      .subscribe((response: ClientInterface) => {
        console.log(response);
      });
  }

  onDeleteClient(id: string) {
    this.clientsService.deleteClient(id).subscribe((response: any) => {
      console.log(response);
      this.clients = this.clients.filter((client) => id !== client._id);
    });
  }

  onEditClient(client: ClientInterface) {
    this.clientFormGroup.patchValue({
      name: client.name,
      zipcode: client.zipcode,
    });
  }
}
