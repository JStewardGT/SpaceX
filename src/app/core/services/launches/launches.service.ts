import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Launches } from './../../models/launches.model';

import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPastLaunches() {
    return this.http.get<Launches[]>(`${environment.url_api}/past`);
  }

  getAllUpcomingLaunches() {
    return this.http.get<Launches[]>(`${environment.url_api}/upcoming`);
  }

  getLaunches(id: string) {
    return this.http.get<Launches[]>(`${environment.url_api}/${id}`);
  }
}
