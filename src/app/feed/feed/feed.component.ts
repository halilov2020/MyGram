import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_core/api/posts.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userPosts: UserPost[];
  // userPosts: UserPost[] = [
  //   new UserPost(1, "Dmitrii", "HelloWorld", "world hello"),
  //   new UserPost(2,"Ion", "Summer Holidays", "summer holidays description"),
  //   new UserPost(3,"Gherman", "Jewellery Technics", "how to make a ring"),
  // ];
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

export class UserPost{
  id: number;
  author: string;
  title: string;
  text: string;
  imgUrl:string;
  constructor(id: number, author: string, title: string, text: string, imgUrl: string){
    this.id = id;
    this.author = author;
    this.title = title;
    this.text = text;
    this.imgUrl = imgUrl;
  }
}