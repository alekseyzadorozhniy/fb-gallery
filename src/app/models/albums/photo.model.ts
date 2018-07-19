import { ImageModel } from './common.model';

export class PhotoModel {
    id: string;
    name: string;
    created_time: number;
    images: ImageModel;

    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.created_time = item.created_time;
        this.images = item.images;
    }

    get photo(): string {
        return this.images[0].source;
    }
}
