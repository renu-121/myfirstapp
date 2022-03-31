import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService
{
  baseurl = 'https://localhost:44339/swagger/index.html'
  constructor(private http: HttpClient) { }
 // Get all cards 
  getAllCards () {
    this.http.get('');

}
}