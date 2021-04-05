import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // ideally would come from configuration
  private LOGIN_URL = "http://localhost:8080/login";

  constructor(private httpClient: HttpClient) { }

  // would be better to pass the login request body around as a strongly typed object
  public login(body: any){
    return this.httpClient.post(this.LOGIN_URL, body);
  }
}
