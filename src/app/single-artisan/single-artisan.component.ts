import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { CommonModule } from '@angular/common';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { StarRatingComponent } from '../component/star-rating/star-rating.component';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-single-artisan',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    StarRatingComponent,
    FormsModule
  ],
  templateUrl: './single-artisan.component.html',
  styleUrl: './single-artisan.component.scss'
})
export class SingleArtisanComponent implements OnInit {

  public artisan!: InterfaceArtisans
  public userMail = {
    firstName: '',
    lastName: '',
    mail: '',
    object: '',
    message: ''
  }

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisanDatasService
  ) {}

  ngOnInit(): void {
    const artisanName = this.route.snapshot.params['name'];
    this.artisansService.getArtisanByName(artisanName).subscribe(data => (this.artisan = data))
  }

  onSubmit(contactForm: NgForm){
    console.log(this.userMail)
  }
}