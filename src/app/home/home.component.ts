import { Component, OnInit } from '@angular/core';
import { ArtisanDatasService } from '../service/artisan-datas.service';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { BestArtisanComponent } from '../component/best-artisan/best-artisan.component';
import { SortByRatingPipe } from '../pipes/sort-by-rating.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BestArtisanComponent,
    SortByRatingPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public artisans!: InterfaceArtisans[];
  

constructor(
  private artisansService: ArtisanDatasService
) {}

ngOnInit() {
  this.artisansService.getArtisans().subscribe(data => (this.artisans = data))
}

}
