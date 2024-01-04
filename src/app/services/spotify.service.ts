import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGRkIYarh-o0EB7-dV7yx_UDh7w_mPG8ISy09hQNLjfvofSHzzxV6zry3NVAo4T2DsNy3_xNFntMFxxHI56zoB-AnZaK22KQGQbib3Ojf6AIhNMbQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
             
  }
}
