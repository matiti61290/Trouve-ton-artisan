import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ArtisanDatasService } from '../../service/artisanService/artisan-datas.service';
import { InterfaceArtisans } from '../../interface/InterfaceArtisans';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [
    StarRatingComponent,
    RouterLink
  ],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent implements OnInit {

  public artisans!: InterfaceArtisans[];

  constructor (
    private artisansService: ArtisanDatasService,
    private router: Router
  ){}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe(data => (this.artisans = data))
  }

}
