import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/api/thoughts';

@Injectable({
    providedIn: 'root',
})
export class ThoughtService {
    constructor(private http: HttpClient) {}

    getLimit(count): Observable<any> {
        return this.http.get(`${baseURL}/${count}`);
    }

    get(id): Observable<any> {
        return this.http.get(`${baseURL}/${id}`);
    }

    create(data): Observable<any> {
        let myHeaders: HttpHeaders = new HttpHeaders({
            'access-control-allow-origin': '*',
        });

        return this.http.post(baseURL, data, {
            headers: myHeaders,
        });
    }

    delete(id): Observable<any> {
        return this.http.delete(`${baseURL}/${id}`);
    }

    findByTitle(title, count): Observable<any> {
        return this.http.get(`${baseURL}/${count}?title=${title}`);
    }
}
