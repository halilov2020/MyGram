export class ProfileUser{
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