import { Component, OnInit } from '@angular/core';
import { SortType } from 'src/app/_core/constants/sort-type.enum';
import { UserPost } from 'src/app/_core/models/UserPost';
import { UserPostFilters } from 'src/app/_core/models/UserPostFilters';
import { PostsService } from '../../_core/api/posts.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userPosts: UserPost[];
  filters:UserPostFilters = new UserPostFilters(0, 3, SortType.NEWEST_DESCENDING);
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts(){
    this.postsService.getPosts(this.filters).subscribe(
      (response:UserPost[]) => {
        if(!this.userPosts){
          this.userPosts = response;
        }else{
          this.userPosts = [...this.userPosts, ...response];
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loadMore(){
    this.filters.page++;
    this.getUserPosts();
  }
}