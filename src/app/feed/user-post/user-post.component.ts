import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from 'src/app/_core/models/UserPost';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() userPost: UserPost;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showUserPostDetails(): void {
    this.router.navigate(["user-post-details/"+this.userPost.id]);
  }
}
