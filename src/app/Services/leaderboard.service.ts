/** @format */

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LeaderboardService {
  searchResults = [];
  constructor(private http: HttpClient) {}
  setSearchResults(data: any) {
    this.searchResults = data;
  }
  getSearchresults() {
    return this.searchResults;
  }

  searchCars(): Observable<any> {
    const url = "http://127.0.0.1:8000/leaderboard";
    const headers = new HttpHeaders();
    return this.http.get(url, { observe: "response", headers });
  }
}
