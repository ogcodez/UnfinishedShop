import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Artikal } from 'src/app/models/artikal.model';
import { ArtikalService } from 'src/app/services/artikal.service';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit{
  artikal?: Artikal[];
  currentArtikal?: Artikal;
  currentIndex = -1;
  title = '';
  p: number = 1;

  constructor(private artikalService: ArtikalService,public authService: AuthService) {
  }
  ngOnInit(): void {
    this.retrieveArtikal();
  }

  retrieveArtikal(): void {
    this.artikalService.findP()
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
