import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EntityEnum} from "../../../shared/enums/entity.enum";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent {
  public clientFormGroup!: FormGroup;
  public selectEntity = Object.values(EntityEnum);


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ClientModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.buildClientFormGroup();
  }

  ngOnInit(): void {
    if (this.data.onEditMode) {
      this.clientFormGroup.patchValue({
        ...this.data.client
      });
    }
  }

  save() {
    this.dialogRef.close(
      this.clientFormGroup.value)
  }

  cancel() {
    this.dialogRef.close()
    this.clientFormGroup.reset()
  }

  private buildClientFormGroup() {
    this.clientFormGroup = this.fb.group({
      name: this.fb.control(''),
      entity: this.fb.control(null),
      cui: this.fb.control(''),
      cnp: this.fb.control(''),
      address: this.fb.control(''),
      city: this.fb.control(''),
      country: this.fb.control(''),
      zipcode: this.fb.control(''),
      contactPersonName: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      website: this.fb.control(''),
      userId: this.fb.control(''),
      _id: this.fb.control('')
    });
  }
}

