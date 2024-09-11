import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import {MatIconModule} from '@angular/material/icon'; 
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatIconModule,
    NgStyle
  ],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {
  @Input() rating!:string;
  public ratingNumber!: number;
  public gradientValue!: number;
  public gradientValuePercent!: number;
  public restValuePercent!:number;
  public stars = [1,2,3,4,5];

  // style variables
  public fullColor:string = 'orange';
  public emptyColor:string = 'white'
  public gradientStar!:string

  ngOnInit(): void {
    this.ratingNumber = Number(this.rating)

    // calcul decimal
    this.gradientValue = this.ratingNumber-Math.trunc(this.ratingNumber)
    this.gradientValuePercent = this.gradientValue * 100;

    this.restValuePercent = 100 - this.gradientValuePercent;

    this.gradientStar = 'linear-gradient(to right, orange, orange '+ this.gradientValuePercent +'%, white, white '+ this.restValuePercent +' 100%),'
    console.log(this.gradientStar)

  }

}
