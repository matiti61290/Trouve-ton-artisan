import { Component } from '@angular/core';
import { ArtisanCardComponent } from '../component/artisan-card/artisan-card.component';

@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [
    ArtisanCardComponent  
  ],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.scss'
})
export class ArtisanListComponent {

}
