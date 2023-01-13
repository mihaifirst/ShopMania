import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean-icon',
  templateUrl: './boolean-icon.component.html',
  styleUrls: ['./boolean-icon.component.scss'],
})
export class BooleanIconComponent {
  @Input() public active = true;
}
