import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Developper } from '@app/_models';
import { DeveloppeurService } from '@app/_services';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.less']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  submitted = false;
  loading = false;
dev:Developper={
  nom:null,
  prenom:null,
  domaine_developpement:null,
  niveau_etude:null,
  technologies:null,
  environement:null,
  mail:null,
  password:null,
  grade:"Junior" 
};
error = '';
public now: Date = new Date();
public type:string=localStorage.getItem('type');

public authentification: string=localStorage.getItem('Authentification');
constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService,
  private developpeurService:DeveloppeurService
) { 
  // redirect to home if already logged in
  if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
}

  ngOnInit() {
    this.loading=true;
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      domaine_developpement: ['', Validators.required],
      niveau_etude: ['', Validators.required],
      technologies: ['', Validators.required],
      environement: ['', Validators.required],
      mail: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/)
     ]],
      grade: [''],
      password: ['', [Validators.required,Validators.minLength(7)]]
  });
  }
    // convenience getter for easy access to form fields
    get f() { return this.inscriptionForm.controls; }
  onSubmit() {
   // console.log(this.f.grade.value);
    this.submitted=true;

    // stop here if form is invalid
    if (this.inscriptionForm.invalid) {
        return;
    }
    if(this.f.grade.value==""||this.f.grade.value==null)
    { //console.log('oui');
    this.dev={
      nom:this.f.nom.value,
      prenom:this.f.prenom.value,
      domaine_developpement:this.f.domaine_developpement.value,
      niveau_etude:this.f.niveau_etude.value,
      technologies:this.f.technologies.value,
      environement:this.f.environement.value,
      mail:this.f.mail.value,
      password:this.f.password.value,
      grade:"Junior" 
    };
  //console.log(this.dev);
  
  }
    else
    {//console.log('non');
    this.dev={
      nom:this.f.nom.value,
      prenom:this.f.prenom.value,
      domaine_developpement:this.f.domaine_developpement.value,
      niveau_etude:this.f.niveau_etude.value,
      technologies:this.f.technologies.value,
      environement:this.f.environement.value,
      mail:this.f.mail.value,
      password:this.f.password.value,
      grade:this.f.grade.value
    };}
    
//console.log(this.dev);
this.developpeurService.createDevelopper(this.dev).pipe(first())
.subscribe(
    data => {
      //console.log(data);
      this.authenticationService.login(this.f.mail.value+"?type="+this.type, this.f.password.value)
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
       
    },);


}

}
