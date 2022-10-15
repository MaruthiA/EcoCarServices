import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  searchForm!: FormGroup;
  countryList = [
    { label: 'India', value: 'india' },
    { label: 'USA', value: 'us' },
  ];
  cityList: any = [];
  constants: any = {
    us: [
      { value: 'chicago', label: 'Chicago' },
      { value: 'newyork', label: 'NewYork' },
    ],
    india: [
      { value: 'chennai', label: 'Chennai' },
      { value: 'hyderabad', label: 'Hyderabad' },
      { value: 'bangalore', label: 'Bangalore' },
    ],
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      country: new FormControl(''),
      city: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      pickupDate: new FormControl('', [Validators.required]),
      returnDate: new FormControl('', [Validators.required]),
    });
  }
  onSelectionChange(eve: any) {
    if (eve.value) {      
      this.cityList = this.constants[eve.value];
      this.searchForm.get('city')?.enable();
    }
  }
}
