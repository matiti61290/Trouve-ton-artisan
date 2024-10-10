import { Component, OnInit } from '@angular/core';
import { ArtisanCardComponent } from '../component/artisan-card/artisan-card.component';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { SearchService } from '../service/searchService/search.service';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { SearchFilterPipe } from '../pipes/searchFilter/search-filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [
    ArtisanCardComponent, 
    SearchFilterPipe,
    FormsModule
  ],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.scss'
})
export class ArtisanListComponent implements OnInit {

  public artisans!: InterfaceArtisans[];
  public searchText: string = ""

  constructor(
    private artisanService: ArtisanDatasService,
    private searchService: SearchService
  ){}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => (this.artisans = data))

    this.searchService.currentSearch.subscribe(search => this.searchText = search)
  }

}
