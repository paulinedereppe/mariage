import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarnavComponent } from './navigation/sidebarnav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LocationComponent } from './location/location.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HotelComponent } from './help/hotel/hotel.component';
import { TransportComponent } from './help/transport/transport.component';
import { RestaurantComponent } from './help/restaurant/restaurant.component';
import { ActivityComponent } from './help/activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

//material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatCarouselModule } from '@ngmodule/material-carousel';


import 'rxjs';
import { RoutingModule } from './routing/routing.module';
import { BaseURL } from './shared/baseurl';



//Services
import { FeedbackService } from './services/feedback.service';
import {ProcessHttpmsgService } from './services/process-httpmsg.service';
import { FilmService } from './services/film.service';
import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  exports : [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarnavComponent,
    HeaderComponent,
    LocationComponent,
    CinemaComponent,
    HotelComponent,
    TransportComponent,
    RestaurantComponent,
    ActivityComponent,
    ContactComponent,
    FooterComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCarouselModule.forRoot(),
    RoutingModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ProcessHttpmsgService, FeedbackService, FilmService, {provide: 'BaseURL', useValue:BaseURL},{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
