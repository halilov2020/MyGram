import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly resourceUrl: string = "/post";
  private readonly baseUrl: string = environment.server;

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.baseUrl + this.resourceUrl + "/getallbyuser");
  }
}

