import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, mapTo, switchMap } from 'rxjs/operators';
import { IUbigeo } from '../shared/interface/ubigeo';

@Injectable({
  providedIn: 'root'
})

export class UbigeoService {

  private httpServicePath: string = "http://localhost:3000/ubigeo/listarUbigeos";

  constructor ( private http: HttpClient) {}

  public getUbigeos(): Observable<IUbigeo[]> {
    return this.http.get<any>(this.httpServicePath)
    .pipe(
      map(res => {
        return res;
      }),
      catchError(this.handleError)
    )    
  }

  private handleError( error:any ){
    console.log("error",error );
    return throwError(error);
  }
}
