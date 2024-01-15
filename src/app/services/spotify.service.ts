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
      'Authorization': 'Bearer BQABm6_JsO0qHStuZxyixw__eTrTpUxBMLLW5-leEPEua70htQa_jg9MjmWVZoaoNhQkv9MxLMq4F6sw6SwoigqI4D-HUpMwDoTi39DtiCZwwap0C40'
    });

    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, {headers});

  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases')
               .pipe( map( (data : any) => data['albums'].items));
               
  }

  getArtists(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map( (data : any) => data['artists'].items));
  }

  getArtist( id : string){
    return this.getQuery(`artists/${ id }`);
               
  }
}
