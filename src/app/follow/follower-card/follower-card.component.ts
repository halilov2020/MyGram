import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Follower } from 'src/app/_core/models/Follower';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css']
})
export class FollowerCardComponent implements OnInit {

  @Input() follower:Follower;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getFollowerAvatar(){
    if(this.follower.imgUrl != null){
      return environment.server + "/" + this.follower.imgUrl;
    }
    return null;
  }
  gotoProfile(){
    this.router.navigateByUrl("/profile/" + this.follower.id);
  }
}
