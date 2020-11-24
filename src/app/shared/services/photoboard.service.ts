import { Injectable } from '@angular/core';
import { Image, Board } from '../models/IPhotoBoard';
import { BOARDS, IMAGES } from '../../mock-images';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoboardService {
  constructor(private apiService: ApiService) {}

  getImages(): Observable<Image[]> {
    //TODO fetch data from API
    this.apiService.getImages().subscribe((data: Image[]) => {
      return of(data);
    })
    return of(IMAGES)
  }

  getBoards(): Observable<Board[]> {
    //TODO fetch data from API
    return of(BOARDS);
  }

  getTags(board: Board): Observable<Image[]> {
    //TODO fetch data from API
    const ImagesInstance = [...IMAGES];
    const newImages: Image[] = ImagesInstance.splice(
      0,
      Math.floor(Math.random() * (IMAGES.length - 1))
    );
    return of(newImages);
  }
}
