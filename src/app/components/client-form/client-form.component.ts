import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    retryPassword: [''],
    addresses: this.fb.array([]),
  });
 
  constructor(private fb: FormBuilder) { }

  get addresses() {
    return this.clientForm.controls["addresses"] as FormArray;
  }

  addAddress() {
    const addressesForm = this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required]
    });

    this.addresses.push(addressesForm);    
  }

  save() {
    console.log('values: ', this.clientForm.value);    
  }


  ngOnInit(): void {}
}
