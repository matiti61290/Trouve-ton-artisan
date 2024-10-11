import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
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
export class ArtisanCardComponent {

  public searchText: string = ""
  @Input() artisan!: InterfaceArtisans

  constructor (
    private router: Router
  ){}

  // navigation to the selected artisan
  onViewArtisan() {
    this.router.navigateByUrl(`artisans/${this.artisan.name}`)
  }

}
