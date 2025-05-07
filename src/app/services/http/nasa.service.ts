import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey: string = 'AeHedZecQ3nkuabkjW7Sp5G8U9bCkhuSzSYwE7TS';
  private apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&thumbs=true`;

  constructor(private http: HttpClient) {}

  getPictureOfTheDay(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
