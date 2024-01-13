import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  constructor(  private activatedRoute : ActivatedRoute ){
    activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    })
  }

}
