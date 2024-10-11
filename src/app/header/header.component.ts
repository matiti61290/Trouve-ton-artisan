import { Component, OnInit } from '@angular/core';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { SearchService } from '../service/searchService/search.service';
import { CategoryService } from '../service/categoryService/category.service';
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
  public category: string = ""

  constructor (
    private artisansService: ArtisanDatasService,
    private searchService: SearchService,
    private categoryService: CategoryService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.artisansService.getArtisans().subscribe(data => this.artisans = data)
    console.log(this.artisans)

    this.searchService.currentSearch.subscribe(search => this.searchText = search)

    this.categoryService.currentCategory.subscribe(setCategory => this.category = setCategory)
  }

  // routing searchbar
  OnViewSearchResult(){
    this.router.navigateByUrl("artisanlist")
  }

  // send the search value into the service and navigate to the artisanlist page
  newSearch() {
    this.searchService.changeSearch(this.searchText)
    this.router.navigateByUrl('artisanlist')
  }

  // send the category into the service and navigate to the category page
  selectCategory(setCategory: string) {
    this.category = setCategory
    this.categoryService.selectCategory(this.category)
    this.router.navigateByUrl('category')
  }
}
