import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, shareReplay, take, throwError } from 'rxjs';
import { IZone } from 'src/app/models/Izoneinterface';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(private http: HttpClient) { }

  getZones<T>(): Observable<T[]> {
    return this.http.get<T[]>('assets/zonedata.json').pipe(take(3), shareReplay(), catchError(error => {
      console.log("Error from zones service + error");
      return throwError(error)
    }))
  }
}
