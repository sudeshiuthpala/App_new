import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers=new HttpHeaders();
    this.headers.append('Accept','application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
   }

   getBlogs(){
     return this.http.get('https://192.168.1.2/ionic-api/viewBlogs.php');
   }
}
