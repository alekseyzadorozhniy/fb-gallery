import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../models/albums/albums.service';
import { AlbumModel } from '../../../models/albums/albums.model';
import { Router } from '@angular/router';

@Component({
    selector: 'albums',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    exportAs: 'albumsComponent'
})
export class AlbumsListComponent implements OnInit {
    public model: AlbumModel[] = [];
    public after: string = '';
    public before: string = '';

    public isLoading: boolean = false;
    public needLoadMore: boolean = true;

    constructor(private albumsService: AlbumsService, private router: Router) {}

    ngOnInit() {
        this.loadAlbums();
    }

    public loadAlbums() {
        if (this.isLoading || !this.needLoadMore) {
            return;
        }
        this.isLoading = true;

        this.albumsService
            .getList(this.after)
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

    public goToUrl(path) {
        this.router.navigate(path);
    }
}
