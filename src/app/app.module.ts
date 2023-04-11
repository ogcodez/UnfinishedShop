import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './logged-in.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HomeComponent } from './home/home.component';
import { OdecaComponent } from './odeca/odeca.component';
import { SkolskaOpremaComponent } from './skolska_oprema/skolska_oprema.component';
import { BelaTehnikaComponent } from './bela_tehnika/bela_tehnika.component';
import { LoginComponent } from './login/login.component';
import { AUTH_PROVIDERS } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddArtikalComponent } from './admin/add-artikal/add-artikal.component';
import { ArtikalListaComponent } from './admin/artikal-lista/artikal-lista.component';
import { ArtikalDetaljiComponent } from './admin/artikal-detalji/artikal-detalji.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesService } from './services/services.service';
import { KorpaComponent } from './korpa/korpa.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PonudaComponent } from './ponuda/ponuda.component';
import { SearchComponent } from './search/search.component';
import { ArtikalComponent } from './artikal/artikal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    HomeComponent,
    OdecaComponent,
    SkolskaOpremaComponent,
    BelaTehnikaComponent,
    LoginComponent,
    AddArtikalComponent,
    ArtikalListaComponent,
    ArtikalDetaljiComponent,
    ContactFormComponent,
    KorpaComponent,
    PonudaComponent,
    SearchComponent,
    ArtikalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    ServicesService
  ],
  bootstrap: [AppComponent],
  exports: [NavigacijaComponent]
})
export class AppModule { }
