import { UserModel } from './users.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginOptions } from 'ngx-facebook';
import { SharedFBService } from '../../services/shared-fb.service';

@Injectable()
export class UsersService {
    constructor(private fb: SharedFBService) {}

    public login() {
        const loginOptions: LoginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,email,user_birthday,user_photos'
        };
        return Observable.fromPromise(
            this.fb.login(loginOptions).then(() => {
                return this.fb.api(
                    `me?fields=picture{url},gender,birthday,email,last_name,first_name`
                );
            })
        );
    }

    public logout() {
        return Observable.fromPromise(this.fb.logout());
    }
}
