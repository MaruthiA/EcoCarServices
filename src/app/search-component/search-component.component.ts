import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  searchForm!: FormGroup;
  carsUnavailable = false;
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
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {}
  minDate = new Date();
  minDateReturn = new Date();

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      country: new FormControl(''),
      city: new FormControl({ value: '', disabled: true }, [
        Validators.required,
      ]),
      pickupDate: new FormControl('', [Validators.required]),
      // pickupDate: new FormControl(''),
      // returnDate: new FormControl(''),
      returnDate: new FormControl('', [Validators.required]),
    });
  }
  onSelectionChange(eve: any) {
    if (eve.value) {
      this.cityList = this.constants[eve.value];
      this.searchForm.get('city')?.enable();
    }
  }
  onSearch() {
    const formData = new FormData();
    formData.append('text', this.searchForm.get('city')?.value);
    this.searchService.searchCars(formData).subscribe((res) => {
      if (res.body.length) {
        this.searchService.setSearchResults(res.body);
        this.router.navigateByUrl('/search');
      } else {
        this.carsUnavailable = true;
      }
    });
  }
}
