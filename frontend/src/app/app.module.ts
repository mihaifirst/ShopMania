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
import {ClientsModule} from "./modules/clients/clients.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRouting,
    DashboardModule,
    SharedModule,
    ClientsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
