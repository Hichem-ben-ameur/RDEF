import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User, Projet, Visiteur, Notification_profile,Notification_projet,Developper} from '@app/_models';
import { UserService, AuthenticationService,ProjetService,VisiteurService,NotificationProfileService,NotificationProjetService,DeveloppeurService } from '@app/_services';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.less']
})
export class AccueilComponentVisiteur implements OnInit {
  loading = false;
  currentUser=JSON.parse(localStorage.getItem('currentUser'));
  developpers: Developper[];
  visiteurs :Visiteur[]=[];
  developpeurs_notification :Developper[]=[];
  projets_notification :Projet[]=[];
  notification_projets:Notification_projet[];
  object:Object[]=[];
  notification_profil:Notification_profile;
  notification_profils:Notification_profile[]=[];
  notification_profils_check:boolean[]=[];
  projets :Projet[]=[];
  allProjets :Projet[]=[];
  constructor(private developpeurService: DeveloppeurService,private notificationProjetService: NotificationProjetService,private notificationProfileService: NotificationProfileService,private visiteurService: VisiteurService,private userService: UserService,private projetService: ProjetService) { }

  ngOnInit() {
    this.projetService.getAll().pipe(first()).subscribe(projet => {
      this.allProjets=projet;
      this.allProjets.forEach(element => {
       const projet= this.allProjets.find(x => x.id_auteur === this.currentUser.id && x._id===element._id);
       if(projet)
       {this.projets.push(projet);}
      
      });
     

       });
    //window.location.reload();
    this.loading = true;
    /*this.notificationProfileService.getAll(this.currentUser.id).pipe(first()).subscribe(users => {
   this.notification_profils=users;
  // console.log(this.notification_profils);
    });*/
    this.developpeurService.getAll().pipe(first()).subscribe(users => {
        this.loading = false;
        this.developpers = users;
//console.log(this.developpers);
     // this.visiteurs=this.visiteurs.json();
     this.developpers.forEach(element => {

       const notification_profil= this.notification_profils.find(x => x.id_developpeur ===element._id  && x.id_visiteur === this.currentUser.id);
       if(!notification_profil)this.notification_profils_check.push(false);
       else this.notification_profils_check.push(true);
  
  });
     

    });
    this.notificationProjetService.getAll(this.currentUser.id).pipe(first()).subscribe(users => {
      this.notification_projets=users;
    //console.log(this.notification_projets);
      this.notification_projets.forEach(element => {
        const projet= this.allProjets.find(x => x._id ===element.id_projet);
        if(projet){
        this.developpeurService.getDevelopper(element.id_developpeur).pipe(first()).subscribe(dev => {
          //.log(this.visiteurs);
          this.developpeurs_notification.push(dev);
          //this.object.push(element,visiteur);  
      });
      this.projetService.getProjet(element.id_projet).pipe(first()).subscribe(projet => {
       // console.log(projet);
        this.projets_notification.push(projet);
        //this.object.push(element,visiteur);  
    });}
    });
    });
  }
  envoyerNotification(id_developpeur)
  {
    this.notification_profil={'id_developpeur':id_developpeur,'id_visiteur':this.currentUser.id};
    this.notificationProfileService.createProjet(this.notification_profil).pipe(first()).subscribe(visiteur => {
      window.location.reload();
      //console.log("insertion");
    });

  }

}

