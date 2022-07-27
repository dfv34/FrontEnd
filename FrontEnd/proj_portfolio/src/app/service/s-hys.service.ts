import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../model/hys';

@Injectable({
  providedIn: 'root'
})
export class SHysService {
  /* hysURL = 'http://localhost:8080/hyslab/';*/
  hysURL = 'https://portfoliodfv.herokuapp.com/hyslab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hys[]>{
    return this.httpClient.get<Hys[]>(this.hysURL + 'lista');
  }

  public detail(id: number): Observable<Hys>{
    return this.httpClient.get<Hys>(this.hysURL + `detail/${id}`);
  } 

  public save(hys: Hys): Observable<any>{
    return this.httpClient.post<any>(this.hysURL + 'create', hys);
  }

  public update(id: number, hys: Hys): Observable<any>{
    return this.httpClient.put<any>(this.hysURL + `update/${id}`, hys);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.hysURL + `delete/${id}`);
  }

}
