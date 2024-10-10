import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ArtisanDatasService } from '../../service/artisanService/artisan-datas.service';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';
import { Router, RouterLink } from '@angular/router';
import { SearchFilterPipe } from '../../pipes/searchFilter/search-filter.pipe';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [
    StarRatingComponent,
    RouterLink,
    SearchFilterPipe,
    FormsModule
  ],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent implements OnInit {

  public artisans!: InterfaceArtisans[];
  public searchText: string = ""

  constructor (
    private artisansService: ArtisanDatasService,
    private router: Router
  ){}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe(data => (this.artisans = data))
  }

}
