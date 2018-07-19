import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedFBService } from '../../services/shared-fb.service';
import { AlbumModel } from './albums.model';
import { PhotoModel } from './photo.model';
import { ListResponseModel } from '../response/response.model';
import { LIMIT, MAX_LIMIT } from '../../app.constants';

@Injectable()
export class AlbumsService {
    constructor(private fb: SharedFBService) {}

    public getList(after?: string, before?: string) {
        let query = `fields=name,count,description,cover_photo{name,images}&limit=${LIMIT}`;
        if (after) {
            query += `&after=${after}`;
        }
        if (before) {
            query += `&before=${before}`;
        }

        return Observable.fromPromise<ListResponseModel<AlbumModel>>(
            this.fb.api(`me/albums?${query}`).then(response => {
                return {
                    data: response.data.map(item => new AlbumModel(item)),
                    pagination: response.paging
                };
            })
        );
    }

    public getPhotos(albumId: string, after?: string, before?: string) {
        let query = `fields=images,name,id,created_time&limit=${LIMIT}`;
        if (after) {
            query += `&after=${after}`;
        }
        if (before) {
            query += `&before=${before}`;
        }

        return Observable.fromPromise<ListResponseModel<PhotoModel>>(
            this.fb.api(`${albumId}/photos?${query}`).then(response => {
                return {
                    data: response.data.map(item => new PhotoModel(item)),
                    pagination: response.paging
                };
            })
        );
    }

    public getAlbumsStat() {
        let query = `fields=name,count&limit=${MAX_LIMIT}`;

        return Observable.fromPromise<ListResponseModel<AlbumModel>>(
            this.fb.api(`me/albums?${query}`).then(response => {
                return {
                    data: response.data.map(item => new AlbumModel(item)),
                    pagination: response.paging
                };
            })
        );
    }
}
