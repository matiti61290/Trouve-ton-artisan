import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ArtisanDatasService } from '../service/artisan-datas.service';
import { CommonModule } from '@angular/common';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';

@Component({
  selector: 'app-single-artisan',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './single-artisan.component.html',
  styleUrl: './single-artisan.component.scss'
})
export class SingleArtisanComponent implements OnInit {

  public artisan!: InterfaceArtisans

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisanDatasService
  ) {}

  ngOnInit(): void {
    // this.artisansService.getArtisans().subscribe(data => (this.artisans = data));
    const artisanName = this.route.snapshot.params['name'];
    this.artisansService.getArtisanByName(artisanName).subscribe(data => (this.artisan = data))
  // this.getArtisan()
  }

  // private getArtisan(){
  //   const artisanName = this.route.snapshot.params['name'];
  //   this.artisan = this.artisansService.getArtisanByName(artisanName).subscribe(data => (this.artisan = data))
  // }
}