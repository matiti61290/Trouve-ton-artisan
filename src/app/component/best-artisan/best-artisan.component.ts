import { Component, OnInit } from '@angular/core';
import { ArtisanDatasService } from '../../service/artisan-datas.service';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';
import { SortByRatingPipe } from '../../pipes/sort-by-rating.pipe';

@Component({
  selector: 'app-best-artisan',
  standalone: true,
  imports: [
    SortByRatingPipe
  ],
  templateUrl: './best-artisan.component.html',
  styleUrl: './best-artisan.component.scss'
})
export class BestArtisanComponent implements OnInit {

  public artisans!: InterfaceArtisans[];
  public sortByRating: "asc" | "desc" = "asc";


  constructor(
    private artisansService: ArtisanDatasService,
  ) {}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe(data => (this.artisans = data))
  }

}
