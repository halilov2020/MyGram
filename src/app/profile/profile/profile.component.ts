import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProfileUser } from 'src/app/_core/models/ProfileUser';
import { UserControllerService } from '../../_core/api/user-controller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  success:boolean = false;
  @Input() user: ProfileUser;
  constructor(
    private userController: UserControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.userController.getUserById(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:ProfileUser)=>{
        this.user = response;
        this.success = true;
        console.log(this.user)
      },
      (error)=>{
        console.log(error)
      }
    );
  }
}