import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddArtikalComponent } from './admin/add-artikal/add-artikal.component';
import { ArtikalDetaljiComponent } from './admin/artikal-detalji/artikal-detalji.component';
import { ArtikalListaComponent } from './admin/artikal-lista/artikal-lista.component';
import { ArtikalComponent } from './artikal/artikal.component';
import { BelaTehnikaComponent } from './bela_tehnika/bela_tehnika.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { KorpaComponent } from './korpa/korpa.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { OdecaComponent } from './odeca/odeca.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { SearchComponent } from './search/search.component';
import { SkolskaOpremaComponent } from './skolska_oprema/skolska_oprema.component';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent},
  { path: 'login',            component: LoginComponent},
  { path: 'bela_tehnika',            component: BelaTehnikaComponent},
  { path: 'skolska_oprema',            component: SkolskaOpremaComponent},
  { path: 'odeca',            component: OdecaComponent},
  { path: 'artikli', component: ArtikalListaComponent, canActivate: [ LoggedInGuard ] },
  { path: 'artikli/:id', component: ArtikalDetaljiComponent, canActivate: [ LoggedInGuard ] },
  { path: 'add', component: AddArtikalComponent,  canActivate: [ LoggedInGuard ] },
  { path: 'kontakt', component: ContactFormComponent },
  { path: 'korpa', component: KorpaComponent },
  { path: 'ponuda', component: PonudaComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artikal/:id', component: ArtikalComponent }




];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
