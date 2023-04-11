import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AuthService } from '../services/auth.service';
import { Artikal } from '../models/artikal.model';
import { ArtikalService } from '../services/artikal.service';
@Component({
  selector: 'app-odeca',
  templateUrl: './odeca.component.html',
  styleUrls: ['./odeca.component.css']
})
export class OdecaComponent {
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
    this.artikalService.findOD()
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
