import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
<<<<<<< HEAD
      'Authorization': 'Bearer BQAGRkIYarh-o0EB7-dV7yx_UDh7w_mPG8ISy09hQNLjfvofSHzzxV6zry3NVAo4T2DsNy3_xNFntMFxxHI56zoB-AnZaK22KQGQbib3Ojf6AIhNMbQ'
=======
      'Authorization': 'Bearer BQDGpIxCbPEKYUlLrgdFuUUd-DlBGVLqnUXntqAhrcj9bNS_leYjD4uysz1vJcFtfA20wfgcWL7fByqYpgrV-EyJ7fyp_0K1v7DypdtcbHwe3Up2ols'
>>>>>>> e23918c57210342b13793b5022f5b40b2d496dc9
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
