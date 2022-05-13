import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CinemaComponent } from '../cinema/cinema.component';
import { ContactComponent } from '../contact/contact.component';
import { LocationComponent } from '../location/location.component';
import { HotelComponent } from '../help/hotel/hotel.component';
import { RestaurantComponent } from '../help/restaurant/restaurant.component';
import { TransportComponent } from '../help/transport/transport.component';
import { ActivityComponent } from '../help/activity/activity.component';
import { FilmDetailsComponent } from '../film-details/film-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cinema', component: CinemaComponent},
  { path: 'film', component:FilmDetailsComponent},
  { path: 'location', component: LocationComponent},
  { path: 'contactus', component: ContactComponent},
  { path: 'hotel', component: HotelComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'train', component: TransportComponent},
  { path: 'activity', component: ActivityComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
