import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  photos: Object[] = [];

  constructor(private _PhotoService: PhotoService) { }

  ngOnInit(): void {
    this._PhotoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
