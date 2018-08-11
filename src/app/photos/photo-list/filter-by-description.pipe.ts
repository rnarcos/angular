import { Pipe, PipeTransform } from '@angular/core';
import { Transform } from 'stream';
import { Photo } from '../photo/photo';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.toLowerCase();

        return photos.filter(item =>
            item.description.toLowerCase().
                includes(descriptionQuery)
        );
    }

}
