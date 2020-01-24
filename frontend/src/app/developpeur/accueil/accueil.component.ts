import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User, Projet, Visiteur, Notification_profile,Notification_projet} from '@app/_models';
import { UserService, AuthenticationService,ProjetService,VisiteurService,NotificationProfileService,NotificationProjetService } from '@app/_services';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.less']
})
export class AccueilComponent implements OnInit {
  loading = false;
  currentUser=JSON.parse(localStorage.getItem('currentUser'));
  projets: Projet[];
  visiteurs :Visiteur[]=[];
  visiteurs_notification :Visiteur[]=[];
  notification_profile:Notification_profile[];
  object:Object[]=[];
  notification_projet:Notification_projet;
  notification_projets:Notification_projet[];
  notification_projets_check:boolean[]=[];
  constructor(private notificationProjetService: NotificationProjetService,private notificationProfileService: NotificationProfileService,private visiteurService: VisiteurService,private userService: UserService,private projetService: ProjetService) { }

  ngOnInit() {
    this.loading = true;
    this.notificationProjetService.getAll2().pipe(first()).subscribe(users => {
   this.notification_projets=users;
    });
    this.projetService.getAll().pipe(first()).subscribe(users => {
        this.loading = false;
        this.projets = users.slice().reverse();
        this.projets.forEach(element => {
          this.visiteurService.getVisiteur(element.id_auteur).pipe(first()).subscribe(visiteur => {
            //.log(this.visiteurs);
            this.visiteurs.push(visiteur);
            //this.object.push(element,visiteur);
           const notification_projet= this.notification_projets.find(x => x.id_developpeur === this.currentUser.id && x.id_projet === element._id);
           if(!notification_projet)this.notification_projets_check.push(false);
           else this.notification_projets_check.push(true);
        });
      });
     // this.visiteurs=this.visiteurs.json();

    });
    this.notificationProfileService.getAll2().pipe(first()).subscribe(users => {
      this.notification_profile=users;
      //console.log(this.notification_profile);
      this.notification_profile.forEach(element => {
        if(element.id_developpeur===this.currentUser.id)
        {this.visiteurService.getVisiteur(element.id_visiteur).pipe(first()).subscribe(visiteur => {
          //.log(this.visiteurs);
          this.visiteurs_notification.push(visiteur);
     // console.log(this.visiteurs_notification);
          //this.object.push(element,visiteur);  
      });}
    });
    });
  }
  envoyerNotification(id_projet,id_visiteur)
  {
    this.notification_projet={'id_developpeur':this.currentUser.id,'id_projet':id_projet,'id_visiteur':id_visiteur};
    this.notificationProjetService.createProjet(this.notification_projet).pipe(first()).subscribe(visiteur => {
      window.location.reload();
      //console.log("insertion");
    });

  }

}
