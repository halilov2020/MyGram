import { Component, OnInit } from '@angular/core';
import { UserPost } from 'src/app/_core/models/UserPost';
import { PostsService } from '../../_core/api/posts.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userPosts: UserPost[];
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts(){
    this.postsService.getPosts().subscribe(
      (response:UserPost[]) => {
        this.userPosts = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}