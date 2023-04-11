import { Component, OnInit } from '@angular/core';
import { ArtikalService } from 'src/app/services/artikal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artikal } from 'src/app/models/artikal.model';

@Component({
  selector: 'app-artikal-detalji',
  templateUrl: './artikal-detalji.component.html',
  styleUrls: ['./artikal-detalji.component.css']
})
export class ArtikalDetaljiComponent implements OnInit {
  currentArtikal: Artikal = {
    naslov: '',
    opis: '',
    cena: 0,
    popust: 0,
    tip: '',
    kolicina: 0,
    slika: ''
  };
  message = '';

  constructor(
    private artikalService: ArtikalService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getArtikal(this.route.snapshot.params.id);
  }

  getArtikal(id: string): void {
    this.artikalService.get(id)
      .subscribe(
        data => {
          this.currentArtikal = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateArtikal(): void {
    this.message = '';

    this.artikalService.update(this.currentArtikal.id, this.currentArtikal)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'uspeno promenjena peraja!';
        },
        error => {
          console.log(error);
        });
  }

  deleteArtikal(): void {
    this.artikalService.delete(this.currentArtikal.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/artikli']);
        },
        error => {
          console.log(error);
        });
  }
}
