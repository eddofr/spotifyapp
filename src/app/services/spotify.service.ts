import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDGpIxCbPEKYUlLrgdFuUUd-DlBGVLqnUXntqAhrcj9bNS_leYjD4uysz1vJcFtfA20wfgcWL7fByqYpgrV-EyJ7fyp_0K1v7DypdtcbHwe3Up2ols'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
             
  }

  getArtist(termino : string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDGpIxCbPEKYUlLrgdFuUUd-DlBGVLqnUXntqAhrcj9bNS_leYjD4uysz1vJcFtfA20wfgcWL7fByqYpgrV-EyJ7fyp_0K1v7DypdtcbHwe3Up2ols'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
