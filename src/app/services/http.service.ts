import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  public getToken(): Observable<HttpResponse<any>>  {
    return this._http.get<any>('/api/widget/v1/settings');
  }
}
