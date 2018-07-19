import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../../models/albums/albums.service';
import { PhotoModel } from '../../../models/albums/photo.model';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss'],
    exportAs: 'photoListComponent'
})
export class PhotoListComponent implements OnInit {
    public model: PhotoModel[] = [];
    public isLoading: boolean = false;
    public needLoadMore: boolean = true;

    private albumId: string;
    private after: string = '';
    private before: string = '';

    constructor(private albumsService: AlbumsService, route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.albumId = params.id;
            this.loadData();
        });
    }

    ngOnInit() {}

    public loadData() {
        if (this.isLoading || !this.needLoadMore) {
            return;
        }
        this.isLoading = true;

        this.albumsService
            .getPhotos(this.albumId, this.after)
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(response => {
                this.model = this.model.concat(response.data);

                this.after = response.pagination.cursors.after;
                this.before = response.pagination.cursors.before;
                if (!response.pagination.next) {
                    this.needLoadMore = false;
                }
            });
    }
}
