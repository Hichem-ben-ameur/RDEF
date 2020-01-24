import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User, Projet, Visiteur, Notification_profile,Notification_projet,Developper} from '@app/_models';
import { UserService, AuthenticationService,ProjetService,VisiteurService,NotificationProfileService,NotificationProjetService,DeveloppeurService } from '@app/_services';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.less']
})
export class ProjetsComponent implements OnInit {
  loading = false;
  currentUser=JSON.parse(localStorage.getItem('currentUser'));
  developpers: Developper[];
  visiteurs :Visiteur[]=[];
  developpeurs_notification :Developper[]=[];
  projets :Projet[]=[];
  allProjets :Projet[]=[];
  notification_projets:Notification_projet[];
  object:Object[]=[];
  notification_profil:Notification_profile;
  notification_profils:Notification_profile[]=[];
  notification_profils_check:boolean[]=[];
  isReadOnly:boolean=true;
  selectProject:Projet=null;
  insertProjetbool:boolean=false;
  insertProjetError:boolean=false;
  constructor(private developpeurService: DeveloppeurService,private notificationProjetService: NotificationProjetService,private notificationProfileService: NotificationProfileService,private visiteurService: VisiteurService,private userService: UserService,private projetService: ProjetService) { }

  ngOnInit() {
    this.loading = true;
    this.projetService.getAll().pipe(first()).subscribe(projet => {
   this.allProjets=projet.slice().reverse();
   this.allProjets.forEach(element => {
    const projet= this.allProjets.find(x => x.id_auteur === this.currentUser.id && x._id===element._id);
    if(projet)
    {this.projets.push(projet);}
   
   });
  
  // console.log(this.projets);
  this.loading = false;
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
  modifierProjet(projet)
  {
   // (<HTMLInputElement>document.getElementById('name_projet'+indice)).readOnly=false;
    console.log();
   // this.message=false;
    //this.isReadOnly=false;
    this.selectProject=projet;
  }
  enregistrerProjet()
  {
    this.projetService.updateProjet(this.selectProject._id,this.selectProject).pipe(first()).subscribe(projet => {
    
      //console.log(projet);
    });
    this.selectProject=null;
  }
  supprimerProjet(id)
  {
    this.projetService.deleteProjet(id).pipe(first()).subscribe(projet => {
    
      window.location.reload();
    });
    
    

  }
  nvProjet()
  {
    this.selectProject={nom_projet:null, details:null, recherche:null, id_auteur:this.currentUser.id};
this.insertProjetbool=true;
  }
  insertProjet()
  {
    if(this.selectProject.nom_projet!=null&&this.selectProject.nom_projet!=""
    &&this.selectProject.details!=null&&this.selectProject.details!=""
    &&this.selectProject.recherche!=null&&this.selectProject.recherche!="")
      {
        console.log(this.selectProject);
        this.projetService.createProjet(this.selectProject).pipe(first()).subscribe(projet => {
    
        window.location.reload();
      });
      
      }else{
        this.insertProjetError=true;
      }
  }

}