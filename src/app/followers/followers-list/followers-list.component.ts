import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {
  
  followers:Follower[] = [
    new Follower("Dmitrii", "Halilov", "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"),
    new Follower("Gherman", "Darabanov", "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"),
    new Follower("Ion", "Titov", "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"),
  ];
  followersList:Follower[];
  filters = {
    page: 0,
    size: 2,
    lastIndex: 2,
    sortOption: SortOptions.FIRST_NAME
  }
  constructor() { }

  ngOnInit(): void {
    this.followersList = this.followers.slice(0,this.filters.lastIndex);
  }

  loadMore(){
    this.filters.page++;
    this.followersList = this.followersList.concat(this.followers.slice(this.filters.lastIndex, this.filters.size)) //response de la backend
    this.filters.lastIndex = this.filters.lastIndex + this.filters.size;
  }
}
export enum SortOptions{
  FIRST_NAME,
  LAST_NAME
}
export class Follower{
  
  firstName:string;
  lastName:string;
  profilePicture:string;

  constructor(firstName:string, lastName:string, profilePicture:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePicture = profilePicture;
  }
}
