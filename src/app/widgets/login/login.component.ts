import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/users/users.model';
import { AuthUser } from '../../services/auth-user.service';
import { UsersService } from '../../models/users/users.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthUser, UsersService]
})
export class LoginComponent implements OnInit {
    constructor(
        private usersService: UsersService,
        private authUser: AuthUser,
        private router: Router
    ) {
        if (this.authUser.loggedIn) {
            this.router.navigate(['/albums']);
        }
    }

    ngOnInit() {}

    public login() {
        this.usersService.login().subscribe((user: UserModel) => {
            this.authUser.login(user);
            this.router.navigate(['/albums']);
        });
    }
}
