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

  public artisans!: InterfaceArtisans[];
  public name!: string

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisanDatasService
  ) {}

  ngOnInit(): void {
    this.artisansService.getArtisans().subscribe(data => (this.artisans = data));
  }
}