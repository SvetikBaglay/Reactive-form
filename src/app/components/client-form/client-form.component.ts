import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  save() {
    console.log('values: ', this.clientForm.value);    
  }

  asFormGroup(val: AbstractControl): FormGroup { return val as FormGroup; }

  onAddAddress(event: MouseEvent) {
    event.preventDefault();

    const addressForm = this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required]
    });
    
    this.addresses.push(addressForm);
    console.log('addresses: ', this.addresses.controls);    
  }
  
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      retryPassword: [''],
      addresses: this.fb.array([]),
    });
  }

  get addresses() {
    return this.clientForm.controls["addresses"] as FormArray;
  }
}