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
      'Authorization': 'Bearer BQArCOUw0Eb_PjZ0vYbNtbMT8XGIvbiYwosrMsBvXmXCUg8jDxZBh-DB8wAQhDkc2rX1pD-0sOJBzanyCWriWsvNbs4gb46UUbVCHnfoPNdJ5r4Qm-g'
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

  getTopTracks( id : string){
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
               .pipe( map( (tracks : any) => tracks['tracks']));
               
  }
}
