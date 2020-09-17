import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Observable, of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    console.log(this.authService.decodedToken.id);
    return this.userService.getUser(this.authService.decodedToken["id"]).pipe(
        catchError( error => {
            this.alertify.error('Problem retreiving your data');
            this.router.navigate(['/members']);
            return of(null);
          }
    ));
  }
}
