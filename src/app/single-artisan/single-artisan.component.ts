import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ArtisanDatasService } from '../service/artisanService/artisan-datas.service';
import { CommonModule } from '@angular/common';
import { InterfaceArtisans } from '../interface/InterfaceArtisans';
import { StarRatingComponent } from '../component/star-rating/star-rating.component';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'


@Component({
  selector: 'app-single-artisan',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    StarRatingComponent,
    FormsModule,
  ],
  templateUrl: './single-artisan.component.html',
  styleUrl: './single-artisan.component.scss'
})
export class SingleArtisanComponent implements OnInit {

  public artisan!: InterfaceArtisans
  email: string = ''
  firstName:string = ''
  lastName:string = ''
  object:string = ''
  message:string = ''

  emailError: boolean = false
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisanDatasService,
  ) {}

  ngOnInit():void {
    const artisanName = this.route.snapshot.params['name'];
    this.artisansService.getArtisanByName(artisanName).subscribe(data => this.artisan = data)
    emailjs.init({
      publicKey: '1oFyPt_ixXmtaAEqV',
      blockHeadless: false,
      limitRate: {
        // Allow 1 request per second
        throttle: 1000
      }
    })
  }
  
  validateEmail(){
    this.emailError = !this.emailPattern.test(this.email)
  }
  
  // send email with emailJS
  onSubmit(){
    if (!this.emailError){
      const templateParams = {
        user_firstname: this.firstName,
        user_lastname: this.lastName,
        user_email: this.email,
        object: this.object,
        message: this.message
      }
      emailjs.send('service_uer984q', 'template_i1k60pb', templateParams, {publicKey: '1oFyPt_ixXmtaAEqV'})
      .then(
        () => {
          console.log('success')
        },
        (error) => {
          console.log('failed', (error as EmailJSResponseStatus).text)
        }
      )
    }
    }



}