import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import {Developper} from '@app/_models';

@Injectable({ providedIn: 'root' })
export class DeveloppeurService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Developper[]>(`${environment.apiUrl}/developpers`);
    }
       getDevelopper(id: String){
         return this.http.get<Developper>(`${environment.apiUrl}/developpers/`+id);
        }
        getDevelopperMail(mai: String){
         return this.http.get<Developper>(`${environment.apiUrl}/developpers/mail/`+mai);
        }
       createDevelopper(developper: Developper){
         return this.http.post<Developper>(`${environment.apiUrl}/developpers/create`,developper);
        }
       deleteDevelopper(id: String){
         return this.http.delete<Developper>(`${environment.apiUrl}/developpers/delete?DevId=`+id);
        }
        updateDevelopper(id: String,developper:Developper){
         return this.http.put<Developper>(`${environment.apiUrl}/developpers/`+id,developper);
        }
}