import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMockTable } from 'src/app/models/Imosktable';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<IMockTable[]> {
    return this.http.get<IMockTable[]>('assets/mockdatatable.json').pipe(catchError(err => {
      console.log("Error from mocktable service" + err);
      return throwError(err)
    }))

  }
}
