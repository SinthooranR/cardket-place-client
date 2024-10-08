import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOptions } from '../../types/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options?: IOptions): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  post<T>(url: string, body: any, options?: IOptions): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  put<T>(url: string, body: any, options?: IOptions): Observable<T> {
    return this.httpClient.put<T>(url, body, options) as Observable<T>;
  }

  delete<T>(url: string, options?: IOptions): Observable<T> {
    return this.delete<T>(url, options) as Observable<T>;
  }
}
