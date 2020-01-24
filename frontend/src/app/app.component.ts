import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    type:string=localStorage.getItem('type');
    

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        //console.log(this.type);
        this.type=localStorage.getItem('type');
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    
    }
}