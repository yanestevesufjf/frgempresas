import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  get(endpoint) {
    return new Promise((resolve, reject) => {
      this.http.get('../assets/data/' + endpoint + '.json').toPromise()
        .then((data: any) => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  post() {

  }
}
