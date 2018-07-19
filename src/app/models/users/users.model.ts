export class UserModel {
    last_name: string = '';
    first_name: string = '';
    gender: string = '';
    picture?: UserPicture;
    birthday: string = '';
    email: string = '';
    id?: string = '';
}

class UserPicture {
    data: PictureEntry;
}

class PictureEntry {
    url: string = '';
    height?: number;
    width?: number;
    is_silhouette?: boolean;
}
