import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(private searchService: SearchService) {}
  carList: any = [];
  ngOnInit(): void {
    this.carList = this.searchService.getSearchresults();
  }
}
