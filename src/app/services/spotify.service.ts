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
      'Authorization': 'Bearer BQCK0wd38h1OMv7uPPxbA3R8obVgwxXXwXWCtawq_QTPScWFsOp_GMhKZOv81gfplYghzdQ-xlS8oW4XwupSkpe_88aqztpKQTpMEheRoTDjnNtIP20'
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
