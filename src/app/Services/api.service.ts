import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://tiny-rul-api.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

    FetchAllRecords():Observable<any>{
        return this.http.get(`${this.baseUrl}/public`)
    }

    insertData(data : { originalUrl: string; isPrivate: boolean }):Observable<any>{
        return this.http.post(`${this.baseUrl}/add`,data)
    }

    UpdateData(code : string):Observable<any>{
        return this.http.put(`${this.baseUrl}/update/${code}`,{})
    }

    DeleteData(code : string):Observable<any>{
        return this.http.delete(`${this.baseUrl}/delete/${code}`,{})
    }
}