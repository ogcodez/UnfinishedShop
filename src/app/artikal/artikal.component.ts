import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artikal } from '../models/artikal.model';
import { ArtikalService } from '../services/artikal.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-artikal',
    templateUrl: './artikal.component.html',
    styles: []
})

export class ArtikalComponent {

    constructor(public authService: AuthService,private artikalService: ArtikalService,  private route: ActivatedRoute) {
      }

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
}
