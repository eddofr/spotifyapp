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
      'Authorization': 'Bearer BQBqwwX6Q1KMnHuCa0a-yrKVNwa-4aJsOfebSxK0bHlVLGM4GejDN2JGERgMqDbaVV_SKVE0cbxF9XIYK6lpa4DxLT4lTy3CYe2DUKAdNdaTA6XxM6M'
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
