import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from, EmptyError, of, EMPTY } from 'rxjs';
import { retry, catchError, switchMap, filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TokenApiModel } from '../models/auth/token.model';
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    //private translationService: TranslationService
  ) { }

  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string>('');

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    Date.prototype.toJSON = function(){ return moment(this).format('YYYY-MM-DD HH:mm:ss'); }
    if (this.authService.getToken()) {
      req = this.addToken(req, this.authService.getToken());
    }
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse, caught:any) => {
        if (error.status === 401) {
          const refreshToken = this.authService.getRefreshToken();
          if(!refreshToken){
            this.authService.clearAuth();
            this.router.navigate(['/login']);
            return EMPTY;
          }
          return this.handle401Error(req, next);
        } else if (error.status === 403){
          this.handle403Error(error);
          return EMPTY;
        } else {
          return throwError(error);
        }
      })
    );
  }
  private addToken(request: HttpRequest<any>, token: string | null) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  private handle403Error(error: HttpErrorResponse){
    if (error.error.code === 'token_expired'){
      this.authService.clearAuth();
      this.router.navigate(['/login']);
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next('');

      const refreshToken = this.authService.refreshToken();
      const result = from(refreshToken);

      return result.pipe(
        switchMap((token: TokenApiModel) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.accessToken);
          return next.handle(this.addToken(request, token.accessToken));
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}