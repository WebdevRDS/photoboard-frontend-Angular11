import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../../../shared/models/IPhotoBoard"

@Component({
  selector: 'app-image-more-details',
  templateUrl: './image-more-details.component.html',
  styleUrls: ['./image-more-details.component.scss']
})
export class ImageMoreDetailsComponent implements OnInit {
  @Input() image!: Image

  constructor() { }

  ngOnInit(): void {
  }

}
