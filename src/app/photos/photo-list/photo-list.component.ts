import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html'
})

export class PhotoListComponent implements OnInit {
    photos: Photo[] = [];
    filter = '';

constructor(
    private _PhotoService: PhotoService,
    private _ActivatedRoute: ActivatedRoute
) { }

    ngOnInit(): void {
        const userName = this._ActivatedRoute.snapshot.params.userName;
        this._PhotoService
            .listFromUser(userName)
            .subscribe(photos => this.photos = photos);
    }
}
