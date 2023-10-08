import { Injectable } from '@angular/core';
import { IpResponse } from '../interfaces/ip-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IpServiceService {
  apiURL = 'http://ip-api.com/json';

  constructor(private http: HttpClient) {}

  getIpData(ipAddress: string): Observable<IpResponse> {
    return this.http.get<IpResponse>(`${this.apiURL}/${ipAddress}`);
  }
}
