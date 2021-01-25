import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserPostFilters } from '../models/UserPostFilters';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly resourceUrl: string = "/post";
  private readonly baseUrl: string = environment.server;

  constructor(private http: HttpClient) { }

  getPosts(filters:UserPostFilters){
    const params: HttpParams = new HttpParams()
      .set('pageSize', filters.size.toString())
      .set('pageNumber', filters.page.toString())
      .set('sortType', filters.sortType.toString());
    return this.http.get(this.baseUrl + this.resourceUrl + "/getall", {params: params});
  }
  likePost(postId:number){
    const params: HttpParams = new HttpParams()
      .set('postId', postId.toString()); 
    return this.http.get(this.baseUrl + this.resourceUrl + "/like", {params: params});
  }
  isLiked(postId:number){
    const params: HttpParams = new HttpParams()
      .set('postId', postId.toString()); 
    return this.http.get(this.baseUrl + this.resourceUrl + "/IsLiked", {params: params});
  }
}