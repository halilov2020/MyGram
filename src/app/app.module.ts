import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TokenInterceptorService } from './_core/interceptors/token-interceptor.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AuthGuard } from './_core/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
