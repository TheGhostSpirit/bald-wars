import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    return this.auth.isLoggedIn
      ? true
      : (this.router.navigateByUrl('/'), false);
  }

}
