import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }
  
  getDataPaatham() {
    return this.httpClient.get('http://localhost/paatham_update/lms/v1/app/get-data');
  }
}
