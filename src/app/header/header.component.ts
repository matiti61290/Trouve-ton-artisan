import { Component, OnInit } from '@angular/core';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../pipes/searchFilter/search-filter.pipe';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    SearchFilterPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public artisans!: InterfaceArtisans[] 
  public searchText: string = ""

  constructor (
    private artisansService: ArtisanDatasService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.artisansService.getArtisans().subscribe(data => this.artisans = data)
    console.log(this.artisans)
  }

  // routing searchbar
  OnViewSearchResult(){
    this.router.navigateByUrl("artisanlist")
  }

}
