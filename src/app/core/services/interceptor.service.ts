import { AuthService } from 'src/app/core/services/auth.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(public loading: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading.isLoading.next(true);
    req = req.clone({ setHeaders: { 'x-omran': 'omran-the-great' } });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Some Thing Want wrong', error.url);
        return throwError(new Error(error.message));
      }),
      finalize(() => {
        this.loading.isLoading.next(false);
      })
    );
  }
}
