import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ArtikalService } from '../services/artikal.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Artikal } from '../models/artikal.model';


@Component({
  selector: 'app-nav',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent{
  naslov= '';
  artikal?: Artikal[];
  currentArtikal?: Artikal;
  currentIndex = -1;
  search: SearchComponent;

  constructor(public authService: AuthService, public artikalService: ArtikalService, public router: Router) {
  }
  
  prosledi(pretraga: string): any {
    this.naslov = pretraga;
  }
}
