import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class ApiErrorMessgeService {
    constructor(
        private translateService: TranslateService
    ) { }

    public getErrorText(error:any) {
        var messge = error.message;
        if(error.code === 'authentication_failure'){
            messge = this.translateService.instant('INVALID.USERNAME.PASSWORD');
        }
        if(error.code === 'authorize_failure'){
            messge = this.translateService.instant('ADMIN.INVALID.NOT.PERMISSON');
        }
        if(error.code === 'request_error'){
            messge = this.translateService.instant('ESS.ORG.AMOUNT.REQUEST.FULL');
        }
        return messge;
    }
}