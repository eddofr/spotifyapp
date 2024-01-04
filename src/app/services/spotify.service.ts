import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCxmbY-bpzILKpSiRuDqv4UaTYf2Xkfp7o-HPAVNZuUvLAIcLOU7HX0j6TM1oYS1rHNcK8rg9bPy8s3ZA7G4NgNcltb9ku8RRGDXe2Bj8OjkNH1yOk'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
                    .pipe( map( (data : any) => data['albums'].items));
             
  }

  getArtist(termino : string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCxmbY-bpzILKpSiRuDqv4UaTYf2Xkfp7o-HPAVNZuUvLAIcLOU7HX0j6TM1oYS1rHNcK8rg9bPy8s3ZA7G4NgNcltb9ku8RRGDXe2Bj8OjkNH1yOk'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
                    .pipe( map( (data : any) => data['artists'].items));
  }
}
