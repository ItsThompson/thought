import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/api/thoughts';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`)
  }

  create(data): Observable<any> {
	let myHeaders: HttpHeaders = new HttpHeaders({
		"access-control-allow-origin": "*"
	})

	console.log(myHeaders);

	return this.http.post(baseURL, data, {
		headers: myHeaders
	});
  }
  
  delete(id): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  findByUser(user): Observable<any> {
    return this.http.get(`${baseURL}?user=${user}`);
  }
}
