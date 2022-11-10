import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../Models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:7091/api";

  constructor(private httpClient:HttpClient) { }

  public registerUser(userDetails:UserDetails): Observable<any>{

    let endpoint = this.apiUrl + "/user"

    return this.httpClient.post<any>(endpoint, userDetails);
  }

  public getAuthToken(userId:string, password:string){
    let endpoint = this.apiUrl + "/user?userId="+userId + "&password="+password;

    return this.httpClient.get<any>(endpoint);
  }

}
