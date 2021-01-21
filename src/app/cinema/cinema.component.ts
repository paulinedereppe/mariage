import { Component, OnInit, Inject } from '@angular/core';
import { Film } from '../shared/film';
import { FilmService } from '../services/film.service';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { BaseURL } from '../shared/baseurl';
import { switchMap } from 'rxjs/operators';
import {Films} from '../shared/Films';
@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  film!:Film;
  films!:Film[];
  filmCopy!:Film;
  filmIds!:string[];
  prev!:string;
  next!:string;
  i="0";


  constructor(private filmservice: FilmService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    //this.filmservice.getFilm(this.i).subscribe(film=>{this.film=film; this.setNextPrev(film.id)})
    this.filmservice.getFilms().subscribe(films=>this.films=films);
    //this.filmservice.getFilmIds().subscribe(filmIds => this.filmIds = filmIds);
    //this.setNextPrev(this.film.id);
    //this.setNextPrev(this.films[this.i].id);
    //setTimeout(()=>{this.i=this.next;this.setNextPrev(this.films[this.next].id)},5000);
  }

  //récupérer le Film précédent/le suivant
  setNextPrev(filmId:string){
    const index=this.filmIds.indexOf(filmId);
    this.prev = this.filmIds[(this.filmIds.length + index - 1) % this.filmIds.length];
    this.next = this.filmIds[(this.filmIds.length + index + 1) % this.filmIds.length];
  }
  goNext():void{
    this.i=this.next;
    const index=this.filmIds.indexOf(this.films[this.i]);
    this.prev = this.filmIds[(this.filmIds.length + index - 1) % this.filmIds.length];
    this.next = this.filmIds[(this.filmIds.length + index + 1) % this.filmIds.length];
    this.ngOnInit();
  }
  goPrev():void{
    this.i=this.prev;
    const index=this.filmIds.indexOf(this.films[this.i]);
    this.prev = this.filmIds[(this.filmIds.length + index - 1) % this.filmIds.length];
    this.next = this.filmIds[(this.filmIds.length + index + 1) % this.filmIds.length];
  }
}
