import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';

@Injectable({
  providedIn: 'root'
})
export class ArtisanDatasService {
  private _url: string = "/data/datas.json"

 constructor(
  private http:HttpClient
 ) {}

  getArtisans(): Observable<InterfaceArtisans[]> {
    return this.http.get<InterfaceArtisans[]>(this._url)
  }

}
