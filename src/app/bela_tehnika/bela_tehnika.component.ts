import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Artikal } from 'src/app/models/artikal.model';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-bela_tehnika',
  templateUrl: './bela_tehnika.component.html',
  styleUrls: ['./bela_tehnika.component.css']
})
export class BelaTehnikaComponent implements OnInit{
  artikal?: Artikal[];
  currentArtikal?: Artikal;
  currentIndex = -1;
  title = '';
  tip = "bela_tehnika";
  p: number = 1;

  constructor(private artikalService: ArtikalService,public authService: AuthService) {
  }
  ngOnInit(): void {
    this.retrieveArtikal();
  }

  retrieveArtikal(): void {
    this.artikalService.findBT()
      .subscribe(
        data => {
          this.artikal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveArtikal();
    this.currentArtikal = undefined;
    this.currentIndex = -1;
  }

}
