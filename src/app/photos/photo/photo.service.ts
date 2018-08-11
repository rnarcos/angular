import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    constructor(private _httpClient: HttpClient) {

    }

    listFromUser(userName: string): Observable<Object[]> {
        return this._httpClient
            .get<Object[]>(`${API}/flavio/photos`);
    }
}
