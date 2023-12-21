import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  
  paises : any[] = [];

  constructor( private http : HttpClient){
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
             .subscribe((data : any) => {
              this.paises = data;
             });
  }

  ngOnInit(): void {

    
  }

}
