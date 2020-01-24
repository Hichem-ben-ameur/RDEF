import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Visiteur } from '@app/_models';
import { VisiteurService } from '@app/_services';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-inscription-visiteur',
  templateUrl: './inscription-visiteur.component.html',
  styleUrls: ['./inscription-visiteur.component.less']
})
export class InscriptionVisiteurComponent implements OnInit {
  inscriptionForm: FormGroup;
  type_visiteur=null;
  submitted = false;
  loading = false;
visiteur:Visiteur={
  nom:null,
  prenom:null,
  type:null,
  nom_entreprise:null,
  responsable_rh:null,
  mail:null,
  password:null
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
  private visiteurService:VisiteurService
) { 
  // redirect to home if already logged in
  if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
}
private emailValidators = [
  Validators.maxLength(250),
  Validators.minLength(5),
  Validators.pattern(/.+@.+\..+/)
];
validateIfChecked(): Validators {
  return (inscriptionForm: FormGroup): ValidationErrors | null => {
    const checked = this.f.type.value;
   // const second= form.get('second');
    if (checked =="entreprise") {
      return {
        'error': true
      };
    }
    return null;
  }
}
  ngOnInit() {
    this.loading=true;
    this.inscriptionForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      type: ['', Validators.required],
      nom_entreprise: [''],
      responsable_rh: [''],
      mail: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/)
     ]],
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
 //console.log('oui');
    this.visiteur={
      nom:this.f.nom.value,
      prenom:this.f.prenom.value,
      nom_entreprise:this.f.nom_entreprise.value,
      responsable_rh:this.f.responsable_rh.value,
      type:this.f.type.value,
      mail:this.f.mail.value,
      password:this.f.password.value
    };


    
//console.log(this.dev);
this.visiteurService.createVisiteur(this.visiteur).pipe(first())
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
type_visiteur_change(type)
{
this.type_visiteur=type;
}

}
