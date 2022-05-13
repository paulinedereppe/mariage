import { Component, OnInit, Inject } from '@angular/core';
import { Film } from '../shared/film';
import { FilmService } from '../services/film.service';
import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';
import { BaseURL } from '../shared/baseurl';
import { switchMap } from 'rxjs/operators';
import {Films} from '../shared/Films';
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film=this.getFilm(0);
  films!:Film[];
  filmCopy!:Film;
  filmIds!:Number[];
  prev!:Number;
  next!:Number;
  i=1;


  constructor(private filmservice: FilmService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    // console.log(this.i);
    // this.filmservice.getFilms().subscribe((films:Film[])=>{this.films=films;});
    // this.filmservice.getFilmIds().subscribe((filmIds:Number[])=>this.filmIds=filmIds);
    // this.filmservice.getFilm(this.i).subscribe((film:Film)=>{this.film=film;});
      
    console.log(this.film);
    //this.setPrevNext(this.film);
    //setTimeout(()=>{this.i=Number(this.next);this.setPrevNext(this.films[this.i.toString()].id)},5000);
  }

  getFilm(id:Number){
      return new Promise(resolve =>{
        this.filmservice.getFilm(id).subscribe(
          (data:any)=>{
            resolve(data);
      })
      
    }).then((data:any)=>{
      console.log(data);
    })  
  }
  goNext(){}
  goPrev(){}
}