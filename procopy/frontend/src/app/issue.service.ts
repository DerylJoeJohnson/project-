import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getemp() {
    return this.http.get(`${this.uri}/Issues`);
  }

  getempById(id) {
    return this.http.get(`${this.uri}/Issues/${id}`);
  }

  addemp(title, responsible, description, age,salary,severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      age:age,
      salary:salary,
      severity: severity
    };
    return this.http.post(`${this.uri}/Issues/add`, issue);
  }

  updateemp(id, title, responsible, description,age,salary, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      age:age,
      salary:salary,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/Issues/update/${id}`, issue);
  }

  deleteemp(id) {
    return this.http.get(`${this.uri}/Issues/delete/${id}`);
  }
}
