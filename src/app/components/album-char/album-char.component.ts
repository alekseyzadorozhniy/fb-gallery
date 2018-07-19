import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlbumsService } from '../../models/albums/albums.service';

@Component({
    selector: 'album-char',
    templateUrl: './album-char.component.html',
    styleUrls: ['./album-char.component.scss']
})
export class AlbumCharComponent implements OnInit {
    public options: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        title: {
            display: true,
            text: 'Number photos per album'
        }
    };
    public isLoading = true;
    public dataset: any[];

    constructor(
        private activeModal: NgbActiveModal,
        private albumsService: AlbumsService
    ) {}

    ngOnInit() {
        this.albumsService
            .getAlbumsStat()
            .finally(() => {
                this.isLoading = false;
            })
            .subscribe(response => {
                this.dataset = response.data.map(item => {
                    return {
                        data: [item.count],
                        label: item.name
                    };
                });
            });
    }

    public close() {
        this.activeModal.close();
    }
}
