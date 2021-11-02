import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, AbstractControl, FormGroupDirective } from '@angular/forms';
import { IClientAdress } from 'src/app/client-interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-client-address-form',
  templateUrl: './client-address-form.component.html',
  styleUrls: ['./client-address-form.component.css']
})
export class ClientAddressFormComponent implements OnInit {
  form!: FormGroup
  
  get city() { return this.form.get('city'); }

  get street() { return this.form.get('street'); }

  constructor(private addressForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.addressForm.control;
  }

}
