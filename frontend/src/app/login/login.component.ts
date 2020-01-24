import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    public now: Date = new Date();
    public type:string=localStorage.getItem('type');
    
    public authentification: string=localStorage.getItem('Authentification');

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            if(this.type=="dev")
            { this.router.navigate(['/developpeur']);}
           else if(this.type=="visiteur")
            { this.router.navigate(['/visiteur']);}
            //this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        //alert(this.type);
        
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        setTimeout(()=>{
            localStorage.removeItem('Authentification');
      },1000)
      //this.type=localStorage.getItem("type");
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value+"?type="+this.type, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    localStorage.setItem('Authentification',""+this.now);
                   if(this.type=="dev")
                   { this.router.navigate(['/developpeur']);}
                  else if(this.type=="visiteur")
                   { this.router.navigate(['/visiteur']);}
                   
                },
                error => {
                   // alert('non');
                   localStorage.setItem('type',this.type);
                    localStorage.setItem('Authentification','Unauthorized');
                   // this.router.navigate(['/login']);
                    this.error = error;
                    this.loading = false;
                });
    }
    setType(type:string)
    {
      this.type=type;
      localStorage.setItem('type',type);
    
    }
    changerType()
    {
        localStorage.removeItem('type');  
        this.type=null;
       
    }
}
