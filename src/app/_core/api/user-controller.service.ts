import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {
  private readonly resourceUrl: string = "/user";
  private readonly baseUrl: string = environment.server;
  constructor(
    private http:HttpClient,
  ) { }

  getUserById(id){
    let params = new HttpParams().set("Id", id);
    return this.http.get(this.baseUrl + this.resourceUrl + "/getbyid", {params: params})
  }
}
