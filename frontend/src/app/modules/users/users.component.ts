import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: UserInterface[] = [];
  public usersFormGroup: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    this.usersFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: UserInterface[]) => {
      this.users = response;
    });
  }

  private buildFormGroup() {
    return this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      fullName: this.fb.control('', Validators.required),
    });
  }
}
