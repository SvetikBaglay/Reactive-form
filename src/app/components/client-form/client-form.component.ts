import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/services/validator-mustMatch';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get f() { return this.clientForm.controls; }

  save() {
    console.log('values: ', this.clientForm.value);    
  }

  asFormGroup(val: AbstractControl): FormGroup { return val as FormGroup; }

  onAddAddress(event: MouseEvent) {
    event.preventDefault();

    const addressForm = this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
    
    this.addresses.push(addressForm);
    console.log('addresses: ', this.addresses.controls);    
  }
  
  ngOnInit(): void {
    this.clientForm = this.fb.group(
      {
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]],
      password: ['',[Validators.required, Validators.minLength(10)]],
      confirmPassword: ["", Validators.required],
      addresses: this.fb.array([]),
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  get addresses() {
    return this.clientForm.controls["addresses"] as FormArray;
  }
}

