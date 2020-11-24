import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Board, Image } from '../models/IPhotoBoard';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // user!: string;
  api: string = '';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService
  ) {
    this.SetApi();
  }

  SetApi() {
    this.api = environment.api;
  }

  getImages(): Observable<Image[]> {
    const apiUrl = `${this.api}/images`;

    return this.http.get<Image[]>(apiUrl, this.httpOptions).pipe(
      catchError(this.handleError<Image[]>('getImages', []))
    );
  }

  getBoards(): Observable<Board[]> {
    const apiUrl = `${this.api}/boards`;

    return this.http.get<Board[]>(apiUrl, this.httpOptions).pipe(
      catchError(this.handleError<Board[]>('getBoards', []))
    );
  }

  getTags(images: Image[]): Observable<Image[]> {
    const apiUrl = `${this.api}/tag`;

    return this.http.post<Image[]>(apiUrl, images, this.httpOptions).pipe(
      catchError(this.handleError<Image[]>('getBoards', []))
    );
  }

  addImages(images: Image[]): Observable<Image[]> {
    const apiUrl = `${this.api}/images`;

    return this.http.post<Image[]>(apiUrl, images, this.httpOptions).pipe(
      catchError(this.handleError<Image[]>('addImages', []))
    );
  }

  addBoards(boards: Board[]): Observable<Board[]> {
    const apiUrl = `${this.api}/boards`;

    return this.http.post<Board[]>(apiUrl, boards, this.httpOptions).pipe(
      catchError(this.handleError<Board[]>('addBoards', []))
    );
  }

  hasImage(newImageUrl: string): Observable<boolean> {
    const apiUrl = `${this.api}/images/check?imageUrl=${newImageUrl}`;

    return this.http
      .get<boolean>(apiUrl, this.httpOptions)
      .pipe(catchError(this.handleError<boolean>('hasImage', false)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.toastrService.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
