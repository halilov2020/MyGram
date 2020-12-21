import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TokenDecoderService } from '../../_core/services/token-decoder.service';
import { UserControllerService } from '../../_core/api/user-controller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  success:boolean = false;
  @Input() user: User;
  constructor(
    private userController: UserControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.userController.getUserById(this.route.snapshot.paramMap.get('id')).subscribe(
      (response:User)=>{
        this.user = response;
        this.success = true;

        console.log(this.user)
      },
      (error)=>{
        console.log(this.route.snapshot.paramMap.get('id'))
        console.log(error)
      }
    );
  }
}

export class User{
  constructor(
    public id:string,
    public firstName:string,
    public lastName:string,
    public email:string,
    public gender:string,
    public age:number,
    public city:string,
    public country:string,
    public imgUrl:string
  ){}
}