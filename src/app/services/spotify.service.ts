import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAH2dY26tRdwckdlVULBpNUMeOanh66tkNi9qVZlJnElmnk6esRhQRww_fG1y1r5GSDyuzgMg3jq70XzzgGj-BKglE2Jtg4KeoiV7nZ8j9IerGCYeY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
             
  }
}
