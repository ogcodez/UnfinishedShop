import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})

export class HomeComponent {
    constructor(public authService: AuthService) {
      }
}
