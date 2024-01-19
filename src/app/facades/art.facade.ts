import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Art} from "../model/art.model";


@Injectable({
  providedIn: 'root',
})
export class ArtFacade {
  private apiUrl = 'localhost:8085/application/public/api';
  private getAll = '/getAllArt'
  private save = '/save'

  constructor(private http: HttpClient) {}

  getArtList(): Observable<Art[]> {
    return this.http.get<{ arts: Art[] }>(`${this.apiUrl}${this.getAll}`).pipe(
      map((response) => response.arts)
    );
  }

  saveArt(art: Art): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}${this.save}`, art)
  }
};
