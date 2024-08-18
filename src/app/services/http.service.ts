import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  post<T>(apiUrl: string, body: any, callback: (res: T) => void) {
    this.http.post<T>(`${api}/${apiUrl}`, body, {
    }).subscribe({
      next: (res: any) => {
        callback(res.data);
      }
    })
  }

  get<T>(apiUrl: string, callback: (res: T) => void) {
    this.http.get<T>(`${api}/${apiUrl}`, {}).subscribe({
      next: (res) => {
        callback(res);
      }
    });
  }
  
  delete<T>(apiUrl: string, id: any, callback: (res: T) => void, errorCallback?: (err: HttpErrorResponse) => void) {
    this.http.delete<T>(`${api}/${apiUrl}/${id}`).subscribe({
      next: (res: T) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        if (errorCallback) {
          errorCallback(err);
        }
      }
    });
  }

  put<T>(apiUrl: string, id: number, body: any, callback: (res: T) => void, errorCallback?: (err: HttpErrorResponse) => void) {
    this.http.put<T>(`${api}/${apiUrl}/${id}`, body).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        if (errorCallback) {
          errorCallback(err);
        }
      }
    });
  }

}
