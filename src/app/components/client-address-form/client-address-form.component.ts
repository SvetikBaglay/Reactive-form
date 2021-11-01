import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-address-form',
  templateUrl: './client-address-form.component.html',
  styleUrls: ['./client-address-form.component.css']
})
export class ClientAddressFormComponent implements OnInit {
  @Input() addressesForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log('addAddress: ', this.addressesForm);
  }

}
