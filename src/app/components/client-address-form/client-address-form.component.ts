import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, AbstractControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-client-address-form',
  templateUrl: './client-address-form.component.html',
  styleUrls: ['./client-address-form.component.css']
})
export class ClientAddressFormComponent implements OnInit {
  form!: FormGroup
  
  constructor(private addressForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.addressForm.control;
  }

}
