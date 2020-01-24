import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { LoginComponent } from './login';
import { AccueilComponent } from './developpeur/accueil/accueil.component'
;
import { AccueilComponentVisiteur } from './visiteur/accueil/accueil.component'
import { ProfileComponent } from './developpeur/profile/profile.component'
;
import { ProjetsComponent } from './visiteur/projets/projets.component'
;
import { InscriptionComponent } from './developpeur/inscription/inscription.component';
import { InscriptionVisiteurComponent } from './visiteur/inscription-visiteur/inscription-visiteur.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AccueilComponentVisiteur,
        AccueilComponent ,
        ProfileComponent ,
        ProjetsComponent ,
        InscriptionComponent ,
        InscriptionVisiteurComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }