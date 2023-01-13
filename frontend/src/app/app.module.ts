import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRouting } from './app.routing';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UsersComponent } from './modules/users/users.component';
import { SharedModule } from './shared/shared.module';
import { ClientsComponent } from './modules/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    UsersComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRouting,
    DashboardModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
