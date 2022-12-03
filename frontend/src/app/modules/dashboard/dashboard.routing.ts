import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { ClientsComponent } from '../clients/clients.component';
import { CompaniesComponent } from '../companies/companies.component';
import { ConfigComponent } from '../config/config.component';
import { InvoicesComponent } from '../invoices/invoices.component';
import { OffersComponent } from '../offers/offers.component';
import { LogsComponent } from '../logs/logs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: '**',
        redirectTo: 'users',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class DashboardRouting {}
