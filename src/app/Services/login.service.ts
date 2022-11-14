/** @format */

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  searchResults = [];
  constructor(private http: HttpClient) {}
  setSearchResults(data: any) {
    this.searchResults = data;
  }
  getSearchresults() {
    return this.searchResults;
  }

  searchCars(data: any): Observable<any> {
    const url = "http://127.0.0.1:8000/login";
    const headers = new HttpHeaders();
    return this.http.post(url, data, { observe: "response", headers });
  }
}
