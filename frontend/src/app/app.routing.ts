import { Routes, RouterModule } from '@angular/router';


import { AccueilComponent } from './developpeur/accueil/accueil.component'
import { AccueilComponentVisiteur } from './visiteur/accueil/accueil.component'
import { ProjetsComponent } from './visiteur/projets/projets.component'
import { ProfileComponent } from './developpeur/profile/profile.component'
import { InscriptionComponent } from './developpeur/inscription/inscription.component'
import { InscriptionVisiteurComponent } from './visiteur/inscription-visiteur/inscription-visiteur.component'
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: 'developpeur', component: AccueilComponent, canActivate: [AuthGuard] },
    { path: 'visiteur', component: AccueilComponentVisiteur, canActivate: [AuthGuard] },
    { path: 'visiteur/projets', component: ProjetsComponent, canActivate: [AuthGuard] },
    { path: 'developpeur/profil', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'developpeur/inscription', component: InscriptionComponent },
    { path: 'visiteur/inscription', component: InscriptionVisiteurComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);