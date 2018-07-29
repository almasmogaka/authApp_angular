import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8000/register';  

  getdata(username, password, email): Observable<any> {    
    let payload ={ username: username, password:  password, email: email };
    return this.http.post(this.url, payload, httpOptions). 
          pipe(map(res => res));            
  }

  getUserlogin(username, password): Observable<any>{      
    let payload ={ username: username, password:  password };
      return this.http.post('http://localhost:8000/loginApi', payload, httpOptions );
}

LoggedIn() {
  return !!localStorage.getItem('token');
}
getToken() {
  return localStorage.getItem('token');
}
}
