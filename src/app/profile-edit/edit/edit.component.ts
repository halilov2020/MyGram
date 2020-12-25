import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditData } from 'src/app/_core/models/EditData';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:FormGroup;
  submitPressed: boolean = false;

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm():void{
    this.editForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, [Validators.required]],
      dateOfBirth: [null],
      city: [null],
      country: [null]
    });
  }

  submit():void{
    this.submitPressed = true;
    if(this.editForm.invalid){
      return;
    }
    const editData: EditData = new EditData(
      this.editForm.value.firstName,
      this.editForm.value.lastName,
      this.editForm.value.email,
      this.editForm.value.gender,
      this.editForm.value.dateOfBirth,
      this.editForm.value.city,
      this.editForm.value.country,
      this.editForm.value.avatar
    );
  }
}
