import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artikal } from '../models/artikal.model';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/api/artikli';

@Injectable({
  providedIn: 'root'
})
export class ArtikalService {

  constructor(private http: HttpClient, private router: Router) { }

  isSearch(): boolean {
    if (this.router.url.includes('/search')) return true;
    return false; 
    }

  getAll(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(baseUrl);
  }

  get(id: any): Observable<Artikal> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(naslov: any): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${baseUrl}?naslov=${naslov}`);
  }

  findBT(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${baseUrl}/bt`);
  }

  findOD(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${baseUrl}/od`);
  }

  findSO(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${baseUrl}/so`);
  }

  findP(): Observable<Artikal[]> {
    return this.http.get<Artikal[]>(`${baseUrl}/p`);
  }

}
