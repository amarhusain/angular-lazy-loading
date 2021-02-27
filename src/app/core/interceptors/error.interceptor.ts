import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    @BlockUI() blockUI: NgBlockUI; 

    constructor(private authenticationService: AuthenticationService,
                private _router : Router,
                private _notifierService: NotifierService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let errorMsg = '';
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // localStorage.clear();
                this.authenticationService.logout();
                errorMsg = 'Unauthorized access, please login first.'
                this._router.navigateByUrl('/userLogin');
            }else{
                errorMsg = 'Something bad happened.'
            }
            this.blockUI.stop();
            const error = err.error.message || err.statusText;
            this._notifierService.notify('error', errorMsg);
            return throwError(error);
        }))
    }
}