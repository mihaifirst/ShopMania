import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanIconComponent } from './components/boolean-icon/boolean-icon.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule,FormsModule,
    ReactiveFormsModule, MatDialogModule],
  exports: [BooleanIconComponent, FormsModule,
    ReactiveFormsModule, MatDialogModule],
  declarations: [BooleanIconComponent],
})
export class SharedModule {}
