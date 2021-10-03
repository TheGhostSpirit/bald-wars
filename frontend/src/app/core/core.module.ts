import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AuthorizationInterceptor } from './interceptors/authorization/authorization.interceptor';
import { BaseUrlInterceptor } from './interceptors/base-url/base-url.interceptor';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { UsersService } from './services/user/users.service';
import { CharactersService } from './services/character/characters.service';
import { AnalysisService } from './services/analysis/analysis.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthService,
    UsersService,
    CharactersService,
    AnalysisService,
    {
      provide: APP_INITIALIZER,
      useFactory: (service: AuthService) => () => service.start(),
      deps: [AuthService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    AuthGuard
  ]
})
export class CoreModule { }
