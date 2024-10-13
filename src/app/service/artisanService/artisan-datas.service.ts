import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';

@Injectable({
  providedIn: 'root'
})
export class ArtisanDatasService {
  private _url: string = "/data/datas.json"
  artisans: InterfaceArtisans[] = [];

 constructor(
  private http:HttpClient
 ) {}

  getArtisans(): Observable<InterfaceArtisans[]> {
    const artisans = this.http.get<InterfaceArtisans[]>(this._url)
    return artisans;
  };

  getArtisanByName(name: string): Observable<InterfaceArtisans> {
    return this.getArtisans().pipe(map(artisans => {
      const artisan = artisans.find(artisan => artisan.name === name)
      if (artisan) {
        return artisan;
      }
      throw new Error('Artisan not found');
    }));
  };

}
