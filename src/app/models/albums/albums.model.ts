import { DEFAULT_IMAGE } from '../../app.constants';
import { ImageModel } from './common.model';

interface CoverPhotoModel {
    id: string;
    images: ImageModel[];
}

export class AlbumModel {
    id: string;
    name: string;
    count: number;
    description?: string;
    coverPhoto?: CoverPhotoModel;

    constructor(album) {
        this.id = album.id;
        this.name = album.name;
        this.count = album.count;
        this.description = album.description;
        this.coverPhoto = album.cover_photo;
    }

    get photo(): string {
        return this.coverPhoto
            ? this.coverPhoto.images[0].source
            : DEFAULT_IMAGE;
    }
}
