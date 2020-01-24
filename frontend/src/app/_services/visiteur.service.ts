import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import {Visiteur} from '@app/_models';

@Injectable({ providedIn: 'root' })
export class VisiteurService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Visiteur[]>(`${environment.apiUrl}/visiteurs`);
    }
       getVisiteur(id: String){
         return this.http.get<Visiteur>(`${environment.apiUrl}/visiteurs/`+id);
        }
        getVisiteurMail(mai: String){
         return this.http.get<Visiteur>(`${environment.apiUrl}/developpers/mail/`+mai);
        }
       createVisiteur(visiteur: Visiteur){
         return this.http.post<Visiteur>(`${environment.apiUrl}/visiteurs/create`,visiteur);
        }
       deleteVisiteur(id: String){
         return this.http.delete<Visiteur>(`${environment.apiUrl}/visiteurs/delete?DevId=`+id);
        }
        updateVisiteur(id: String,visiteur:Visiteur){
         return this.http.put<Visiteur>(`${environment.apiUrl}/visiteurs/`+id,visiteur);
        }
}