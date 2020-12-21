export class UserPost{
    constructor(
      public id: number, 
      public author: string, 
      public title: string, 
      public text: string, 
      public imgUrl: string
      ){}
  }