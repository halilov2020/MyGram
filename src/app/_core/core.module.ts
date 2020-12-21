import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[]
})
export class CoreModule { }
