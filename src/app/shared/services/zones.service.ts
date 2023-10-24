import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, shareReplay, take } from 'rxjs';
import { IZone } from 'src/app/models/Izoneinterface';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(private http: HttpClient) { }

  getZones(): Observable<IZone[]> {
    return this.http.get<IZone[]>('assets/zonedata.json').pipe(take(3), shareReplay(),catchError(error => of("Error while request",error)))}
}
