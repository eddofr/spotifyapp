import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista : any = {};
  loading : boolean = true;

  constructor(  private activatedRoute : ActivatedRoute,
                private spotify : SpotifyService            
    ){
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.getArtist(params['id']);
    })
  }

  getArtist( id : string ){
      this.spotify.getArtist(id).subscribe( artista => {
            console.log(artista);
            this.artista = artista;
            this.loading = false;
      } );
  }

}
