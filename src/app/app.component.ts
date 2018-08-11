import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  photos: Object[] = [];

  constructor(_PhotoService: PhotoService) {
      _PhotoService
        .listFromUser('flavio')
        .subscribe(photos => this.photos = photos);
  }
}
