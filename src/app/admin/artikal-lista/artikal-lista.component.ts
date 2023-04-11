import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Artikal } from 'src/app/models/artikal.model';
import { ArtikalService } from 'src/app/services/artikal.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-artikal-lista',
  templateUrl: './artikal-lista.component.html',
  styleUrls: ['./artikal-lista.component.css']
})
export class ArtikalListaComponent implements OnInit {
  artikal?: Artikal[];
  currentArtikal?: Artikal;
  currentIndex = -1;
  naslov = '';

  constructor(private artikalService: ArtikalService,public authService: AuthService) { }

  ngOnInit(): void {
    this.retrieveArtikal();
  }

  retrieveArtikal(): void {
    this.artikalService.getAll()
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

  setActiveArtikal(artikal: Artikal, index: number): void {
    this.currentArtikal = artikal;
    this.currentIndex = index;
  }

  removeAllArtikal(): void {
    this.artikalService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
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

  prikaz(this: any):void {
    if (this.authService.getUser()){

    }
  }

}
