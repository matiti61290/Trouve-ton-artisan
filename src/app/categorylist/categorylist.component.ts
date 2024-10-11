import { Component, OnInit } from '@angular/core';
import { ArtisanCardComponent } from '../component/artisan-card/artisan-card.component';
import { CategoryFilterPipe } from '../pipes/categoryFilter/category-filter.pipe';
import { CategoryService } from '../service/categoryService/category.service';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [
    ArtisanCardComponent,
    CategoryFilterPipe
  ],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent implements OnInit {

  public artisans!: InterfaceArtisans[];
  public category: string = ""

  constructor(
    private artisanService: ArtisanDatasService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => (this.artisans = data));

    this.categoryService.currentCategory.subscribe(setCategory => this.category = setCategory)
  }
}
