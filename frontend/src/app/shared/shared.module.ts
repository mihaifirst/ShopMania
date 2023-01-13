import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanIconComponent } from './components/boolean-icon/boolean-icon.component';

@NgModule({
  imports: [CommonModule],
  exports: [BooleanIconComponent],
  declarations: [BooleanIconComponent],
})
export class SharedModule {}
