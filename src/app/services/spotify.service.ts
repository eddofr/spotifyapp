import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getQuery(query : string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAyvJO6TQl853o9ql5BO9DVgBYOLLJIPbWAg8ZyLs6zml1kVRJNa4Y9SJs3dd8Xi06HqGtV22Jr5UAsvdPSjCg6tvQRS92LYNB4JsKbAn6tpxS7qRU'
    });

    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, {headers});

  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
               .pipe( map( (data : any) => data['albums'].items));
               
  }

  getArtist(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( (data : any) => data['artists'].items));
  }
}
