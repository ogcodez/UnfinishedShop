import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Artikal } from 'src/app/models/artikal.model';
import { ArtikalService } from 'src/app/services/artikal.service';
import { HttpClient } from '@angular/common/http';
import { NavigacijaComponent } from '../navigacija/navigacija.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  artikal?: Artikal[];
  currentArtikal?: Artikal;
  currentIndex = -1;
  p: number = 1;
  naslov='';

  constructor(private artikalService: ArtikalService, public nav: NavigacijaComponent) {
  }


  ngOnInit(): void {
    this.retrieveArtikal();
  }

  retrieveArtikal(): void {
    this.artikalService.findByTitle(this.nav.naslov)
      .subscribe(
        data => {
          this.artikal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentArtikal = undefined;
    this.currentIndex = -1;

    this.artikalService.findByTitle(this.naslov)
      .subscribe(
        data => {
          this.artikal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
}
