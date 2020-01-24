import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Developper } from '@app/_models';
import { DeveloppeurService } from '@app/_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  loading = false;
   dev: Developper;
  isReadOnly:boolean=true;
   currentUser=JSON.parse(localStorage.getItem('currentUser'));
   message:boolean=false;

  constructor(private developpeurService: DeveloppeurService) { }

  ngOnInit() {
    
    //console.log(currentUser.id);
    this.loading = true;
    this.developpeurService.getDevelopper(this.currentUser.id).pipe(first()).subscribe(users => {
        this.loading = false;
        this.dev = users;
        //console.log(this.dev);
    });
  }
  modifierProfile()
  {
    this.message=false;
    this.isReadOnly=false;
  }
  enregistrer()
  { 
this.developpeurService.updateDevelopper(this.currentUser.id,this.dev).pipe(first()).subscribe(users => {
  this.isReadOnly=true;
  this.message=true;


});
  }

}
