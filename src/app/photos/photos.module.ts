import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoService } from './photo/photo.service';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosComponent,
        PhotoListComponent,
        PhotoFormComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        PhotoService
    ]
})
export class PhotosModule {

}
