import { NgModule } from '@angular/core';

import { TopbarComponent } from './components/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, DashboardRouting, ReactiveFormsModule, FormsModule],
  exports: [TopbarComponent],
  declarations: [
    TopbarComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
  ],
})
export class DashboardModule {}
