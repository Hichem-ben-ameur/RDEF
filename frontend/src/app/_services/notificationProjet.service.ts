import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import {Notification_projet} from '@app/_models';

@Injectable({ providedIn: 'root' })
export class NotificationProjetService {
    constructor(private http: HttpClient) { }

    getAll(id: String) {
        return this.http.get<Notification_projet[]>(`${environment.apiUrl}/notification-projet/`+id);
    }
    getAll2() {
        return this.http.get<Notification_projet[]>(`${environment.apiUrl}/notification-projet/`);
    }
    deleteNotificationProjet(id: String){
        return this.http.delete<Notification_projet>(`${environment.apiUrl}/notification-projet/`+id);
       }


       createProjet(notification_projet: Notification_projet){
         return this.http.post<Notification_projet>(`${environment.apiUrl}/notification-projet/create`,notification_projet);
        }


}