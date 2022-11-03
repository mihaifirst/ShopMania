import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRouting, ReactiveFormsModule, FormsModule],
  exports: [],
  declarations: [
    MainComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
  ],
})
export class DashboardModule {}
