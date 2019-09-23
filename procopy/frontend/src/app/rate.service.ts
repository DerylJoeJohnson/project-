import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getemp() {
    return this.http.get(`${this.uri}/Rate`);
  }

  getempById(id) {
    return this.http.get(`${this.uri}/Rate/${id}`);
  }

  addemp(title, description, rating) {
    const rate = {
      title: title,
      description: description,
     rating: rating
    };
    return this.http.post(`${this.uri}/Rate/add`, rate);
  }

  updateemp(id, title, description, rating) {
    const rate = {
      title: title,
      description: description,
     rating: rating
    };
    return this.http.post(`${this.uri}/Rate/update/${id}`, rate);
  }

  deleteemp(id) {
    return this.http.get(`${this.uri}/Rate/delete/${id}`);
  }
}