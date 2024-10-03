import { Component, OnInit } from '@angular/core';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public artisans!: InterfaceArtisans[] 
  categorizedArtisans: { [key: string]: InterfaceArtisans[] } = {};

  constructor (
    private artisansService: ArtisanDatasService,
  ){}

  ngOnInit(): void {
    this.artisansService.getArtisans().subscribe(data => this.artisans = data)
    this.categorizedArtisans = this.sortByCategory(this.artisans)
    console.log(this.categorizedArtisans)
    console.log(this.artisans)
  }

  sortByCategory(artisans: InterfaceArtisans[]): { [key:string]: InterfaceArtisans[]} {
      return artisans.reduce((acc, artisan) => {
      if (!acc[artisan.category]) {
        acc[artisan.category] = []
      }
      acc[artisan.category].push(artisan)
      return acc
    }, {} as {[key:string]: InterfaceArtisans[]})
  }

}
