import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import {Projet} from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ProjetService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Projet[]>(`${environment.apiUrl}/projets`);
    }
       getProjet(id: String){
         return this.http.get<Projet>(`${environment.apiUrl}/projets/`+id);
        }
        getProjetMail(mai: String){
         return this.http.get<Projet>(`${environment.apiUrl}/projets/mail/`+mai);
        }
       createProjet(projet: Projet){
         return this.http.post<Projet>(`${environment.apiUrl}/projets/`,projet);
        }
       deleteProjet(id: String){
         return this.http.delete<Projet>(`${environment.apiUrl}/projets/`+id);
        }
        updateProjet(id: String,projet:Projet){
         return this.http.put<Projet>(`${environment.apiUrl}/projets/`+id,projet);
        }
}