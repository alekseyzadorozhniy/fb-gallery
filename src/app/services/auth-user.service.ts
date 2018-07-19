import { Injectable } from '@angular/core/@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/users/users.model';
import { SharedFBService } from './shared-fb.service';

@Injectable()
export class AuthUser {
    public user: BehaviorSubject<UserModel>;
    public loggedIn: boolean = false;

    constructor(private fb: SharedFBService) {
        const user = JSON.parse(window.localStorage.getItem('user'));
        this.user = new BehaviorSubject<UserModel>(user);
        this.loggedIn = !!user;
        this.checkUser();
    }

    public checkUser() {
        return this.fb.getLoginStatus().then(data => {
            if (data.status === 'connected') {
                this.user.next(JSON.parse(window.localStorage.getItem('user')));
                return true;
            }

            this.logout();
            return false;
        });
    }

    public login(user: UserModel) {
        window.localStorage.setItem('user', JSON.stringify(user));
        this.user.next(user);
        this.loggedIn = true;
    }

    public logout() {
        window.localStorage.removeItem('user');
        this.user.next(null);
        this.loggedIn = false;
    }
}
