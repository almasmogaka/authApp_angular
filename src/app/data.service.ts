import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { } 


  private url = 'http://localhost:8000/quiz';

  getquiz(): Observable<any> {   
    return this.http.get(this.url);        
  }  
  
}
