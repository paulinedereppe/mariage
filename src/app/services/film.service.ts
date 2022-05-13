import { Injectable } from '@angular/core';
import { Film } from '../shared/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import {Films} from '../shared/Films';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  film:Film
  films:Film[];
  results:Film[];
  constructor(private http: HttpClient,
    private processHttpMsgService:ProcessHttpmsgService) { 
      this.results= [];
    }
    
    
    getFilm(id:Number):Observable<Film>{
      console.log(BaseURL+'films/'+id.toString())
      return this.http.get<Film>(BaseURL+`films/`+id.toString())
      .pipe(catchError(this.processHttpMsgService.handleError));
    }

    getFilms():Observable<Film[]>{
      return this.http.get<Film[]>(BaseURL+`films`)
      .pipe(catchError(this.processHttpMsgService.handleError));
    }

    getFilmIds():Observable<Number[] | any>{
      return this.getFilms().pipe(map(films=>films.map(films=>films.id)))
      .pipe(catchError(this.processHttpMsgService.handleError));
    }

    
    
}