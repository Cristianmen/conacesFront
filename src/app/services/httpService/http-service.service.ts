import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  requestHttp(requestType: string, url: string, bodyRequest?: any, queryString?: HttpParams, ): Observable<any> {

    // const header = {
    //   'Access-Control-Allow-Origin': '*'
    // };
    return this.http.request(requestType, url,
      {
        body: bodyRequest,
        observe: 'response',
        params: queryString
        // headers: header
      });
  }
}
