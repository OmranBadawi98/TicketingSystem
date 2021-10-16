import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({ setHeaders: { 'x-omran': 'omran-the-great' } });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Some Thing Want wrong', error.url);
        return throwError(new Error(error.message));
      })
    );
  }
}
