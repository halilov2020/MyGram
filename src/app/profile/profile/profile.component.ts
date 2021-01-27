import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FollowService } from 'src/app/_core/api/follow.service';
import { ProfileUser } from 'src/app/_core/models/ProfileUser';
import { TokenDecoderService } from 'src/app/_core/services/token-decoder.service';
import { environment } from 'src/environments/environment';
import { UserControllerService } from '../../_core/api/user-controller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  success:boolean = false;
  isMyAccount:boolean;
  isUserSubscribed:boolean;
  @Input() user: ProfileUser;
  constructor(
    private userController: UserControllerService,
    private route: ActivatedRoute,
    private tokenDecoder: TokenDecoderService,
    private followService:FollowService
  ) { }

  ngOnInit(){
    this.getUserProfile();
    this.isMyAccount = this.isMyProfile();
    this.isSubscribed();
  }
  isMyProfile():boolean {
    if(this.tokenDecoder.id == this.route.snapshot.paramMap.get('id')){
      return true;
    }
    return false;
  }

  getUserProfile(){
    this.userController.getUserById(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:ProfileUser)=>{
        this.user = response;
        this.success = true;
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  
  isSubscribed(){
    this.followService.isFollowed(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:any) => {
        this.isUserSubscribed = response.isFollowed
      }
    );
  }
  follow(){
    this.followService.follow(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:any) => {
        console.log(response);
        window.location.reload();
      }
    );
  }
  unfollow(){
    this.followService.unfollow(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:any) => {
        console.log(response);
        window.location.reload();
      }
    );
  }
  getImgUrl(){
    return environment.server + "/"+this.user.imgUrl;
  }
}
