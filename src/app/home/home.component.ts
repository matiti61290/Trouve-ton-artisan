import { Component, OnInit } from '@angular/core';
import { ArtisanDatasService } from '../service/artisan-datas.service';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
  console.log(this.artisans[0].name)
}

}
