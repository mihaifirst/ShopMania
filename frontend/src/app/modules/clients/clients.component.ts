import {Component, OnInit} from '@angular/core';
import {ClientsService} from './clients.service';
import {ClientInterface} from '../../shared/interfaces/clients.interface';
import {MatDialog} from "@angular/material/dialog";
import {ClientModalComponent} from "./client-modal/client-modal.component";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public clients: ClientInterface[] = [];

  constructor(private clientsService: ClientsService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.initClients();
  }


  private initClients() {
    this.clientsService
      .getClients()
      .subscribe((response: ClientInterface[]) => {
        this.clients = response;
      });
  }

  createClient() {
    this.dialog.open(ClientModalComponent, {
      width: '400px',
      disableClose: true,
      data: {onEditMode: false}
    }).afterClosed().subscribe(response => {
      if (response) {
        delete response._id;
        this.clientsService
          .createClient(response)
          .subscribe((newClient: ClientInterface) => {
            this.clients.push(newClient)
          });
      }
    });
  }

  onEditClient(client: ClientInterface) {
    this.dialog.open(ClientModalComponent, {
      width: '400px',
      disableClose: true,
      data: {onEditMode: true, client}
    }).afterClosed().subscribe(response => {
      if (response) {
        this.clientsService
          .updateClient(response)
          .subscribe((response: ClientInterface) => {
              const clientIndex = this.clients.findIndex((client) => client._id === response._id)
              this.clients[clientIndex] = response;
              this.clients = [...this.clients];

            },
          );
      }
    });
  }

  onDeleteClient(id: string) {
    this.clientsService.deleteClient(id).subscribe((response: any) => {
      console.log(response);
      this.clients = this.clients.filter((client) => id !== client._id);
    });
  }
}


