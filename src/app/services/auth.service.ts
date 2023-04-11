import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = 'http://localhost:3000/user'
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(this.api_url)
  }
  getByCode(code: any) {
    return this._http.get(this.api_url + '/' + code)
  }
  proceedRegister(inputData: any) {
    return this._http.post(this.api_url, inputData)
  }
  updateUser(code: any, inputData: any) {
    return this._http.put(this.api_url + '/' + code, inputData)
  }
}
