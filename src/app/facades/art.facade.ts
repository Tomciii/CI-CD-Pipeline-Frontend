import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Art} from "../model/art.model";


@Injectable({
  providedIn: 'root',
})
export class ArtFacade {
  private getAllArt = 'http://localhost:8085/application/public/api/getAllArt';
  private save = 'http://localhost:8085/application/public/api/save'

  constructor(private http: HttpClient) {}

  getArtList() {
    return firstValueFrom(this.http.get<Art[]>(this.getAllArt));
}

  saveArt(art: Art): Observable<string> {
    return this.http.post<string>(this.save, art)
  }
};
