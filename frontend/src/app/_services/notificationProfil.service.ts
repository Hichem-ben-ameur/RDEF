import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import {Notification_profile} from '@app/_models';

@Injectable({ providedIn: 'root' })
export class NotificationProfileService {
    constructor(private http: HttpClient) { }

    getAll(id: String) {
        return this.http.get<Notification_profile[]>(`${environment.apiUrl}/notification-profil/`+id);
    }

    getAll2() {
        return this.http.get<Notification_profile[]>(`${environment.apiUrl}/notification-profil/`);
    }
       createProjet(notificationProfile: Notification_profile){
         return this.http.post<Notification_profile>(`${environment.apiUrl}/notification-profil/create`,notificationProfile);
        }


}