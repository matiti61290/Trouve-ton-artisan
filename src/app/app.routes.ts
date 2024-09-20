import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';
import { SingleArtisanComponent } from './single-artisan/single-artisan.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'artisanlist', component:ArtisanListComponent },
    { path: 'artisanlist/:name', component: SingleArtisanComponent},
    { path: '**', pathMatch: 'full', component: PagenotfoundComponent}
];
