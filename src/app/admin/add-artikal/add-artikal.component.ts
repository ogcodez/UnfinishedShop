import { Component, Input, OnInit } from '@angular/core';
import { Artikal } from 'src/app/models/artikal.model';
import { ArtikalService } from 'src/app/services/artikal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-artikal',
  templateUrl: './add-artikal.component.html',
  styleUrls: ['./add-artikal.component.css']
})
export class AddArtikalComponent implements OnInit {

  artikal: Artikal = {
  naslov: '',
  opis: '',
  cena: 0,
  popust: 0,
  tip: '',
  kolicina: 0,
  slika: ''
};
submitted = false;

  constructor(private artikalService: ArtikalService) { }

  ngOnInit(): void {
  }

  saveArtikal(): void {
    const data = {
      naslov: this.artikal.naslov,
      opis: this.artikal.opis,
      cena: this.artikal.cena,
      popust: this.artikal.popust,
      tip: this.artikal.tip,
      kolicina: this.artikal.kolicina,
      slika: this.artikal.slika,
    };

    this.artikalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArtikal(): void {
    this.submitted = false;
    this.artikal = {
      naslov: '',
      opis: '',
      cena: 0,
      popust: 0,
      tip: '',
      kolicina: 0,
      slika: ''
    };
  }

}
