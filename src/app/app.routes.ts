import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';
import { SingleArtisanComponent } from './single-artisan/single-artisan.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'artisanlist', component:ArtisanListComponent },
    { path: 'artisan/:name', component: SingleArtisanComponent}
];
