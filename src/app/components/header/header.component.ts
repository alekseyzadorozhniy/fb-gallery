import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlbumCharComponent } from '../album-char/album-char.component';
import { UserModel } from '../../models/users/users.model';
import { UsersService } from '../../models/users/users.service';
import { AuthUser } from '../../services/auth-user.service';

@Component({
    selector: 'page-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user: UserModel;

    constructor(
        private usersService: UsersService,
        private authUser: AuthUser,
        private modalService: NgbModal,
        private router: Router
    ) {
        this.authUser.user.subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit() {}

    public logout() {
        this.usersService.logout().subscribe(() => {
            this.authUser.logout();
            this.router.navigate(['login']);
        });
    }

    public showStat() {
        this.modalService.open(AlbumCharComponent, { size: 'lg' });
    }
}
