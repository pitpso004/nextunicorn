import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class MyDialogService {
    confirmWithType(arg0: string, arg1: () => void) {
        throw new Error("Method not implemented.");
    }

    constructor(
        private translateService: TranslateService
    ) { }

    public confirmDeleteData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.DELETE_DATA');
        this.confirm('', confirmText, callback);
    }

    public confirmWithCancel(title: string, text: string, acceptCallback: () => void, cancelCallback: () => void) {
        const confirmText = this.translateService.instant('BUTTON.YES');
        const cancelText = this.translateService.instant('BUTTON.CANCEL');
        Swal.fire({
            title,
            text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmText,
            reverseButtons: true,
            cancelButtonText: cancelText
        }).then((result) => {
            if (result.value) {
                acceptCallback();
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                cancelCallback();
            }
        });
    }
    public confirmSaveData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.SAVE_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmApprove(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.APPROVE');
        this.confirm("", confirmText, callback);
    }

    public confirmAddData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.ADD_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmSendData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.SENT_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmSendWidData(callback: () => void) {
        const confirmText = this.translateService.instant('SEND.DATA.WD');
        this.confirm("", confirmText, callback);
    }

    public confirmApproveData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.APP_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmSubmit(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.SUBMIT_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmFinish(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.FINISH');
        this.confirm("", confirmText, callback);
    }

    public confirmData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.CONFIRM.PINCODE');
        this.confirm("", confirmText, callback);
    }

    public confirmReject(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.REJECT_DATA');
        this.confirmRejectData("", confirmText, callback);
    }

    public confirmAccept(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.ACCEPT_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmCancelRe(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.CANCEL_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmNotPass(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.NOT_PASS');
        this.confirm("", confirmText, callback);
    }

    public confirmComplete(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.COMPLETE_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmChange(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.CHANGE_DATA');
        this.confirm("", confirmText, callback);
    }

    public confirmChangeEmail(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.CHANGE_EMAIL');
        this.confirm("", confirmText, callback);
    }

    public confirmCancelData(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.CANCEL');
        this.confirm("", confirmText, callback);
    }

    public confirmOtp(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.RESETOTP');
        this.confirm("", confirmText, callback);
    }

    public confirmAddUser(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.ADD_USER');
        this.confirm("", confirmText, callback);
    }
    public confirmWarning(callback: () => void) {
        const confirmText = this.translateService.instant('CONFIRM.WARNING.OK');
        this.confirmOk("", confirmText, callback);
    }
    public confirmOk(title: string, text: string, acceptCallback: () => void) {
        const confirmButtonText = this.translateService.instant('BUTTON.YES');
        Swal.fire({
            title,
            text:this.translateService.instant(text),
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
            confirmButtonText: confirmButtonText,
        }).then((result) => {
            if (result.value) {
                acceptCallback();
            }
        });
    }
    public confirm(title: string, text: string, acceptCallback: () => void) {
        const confirmButtonText = this.translateService.instant('BUTTON.YES');
        const cancelButtonText = this.translateService.instant('BUTTON.CANCEL');
        Swal.fire({
            title,
            text:this.translateService.instant(text),
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                acceptCallback();
            }
        });
    }
    public confirmRejectData(title: string, text: string, acceptCallback: () => void) {
        const confirmButtonText = this.translateService.instant('BUTTON.CONFIRM');
        const cancelButtonText = this.translateService.instant('BUTTON.CANCEL');
        Swal.fire({
            title,
            text:this.translateService.instant(text),
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((result) => {
            if (result.value) {
                acceptCallback();
            }
        });
    }
    public confirmCancel(title: string, text: string, acceptCallback: () => void, canncelCallback: () => void) {
        Swal.fire({
            title,
            text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                acceptCallback();
            } else if (result.dismiss == Swal.DismissReason.cancel) {
                canncelCallback();
            }
        })
    }

   

    public error(text: string, title: string = '', callback?: () => void) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public warningTitle(text: string, title: string = '', callback?: () => void) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public errorNoTitle(text: string, callback?: () => void) {
        Swal.fire({
            icon: 'error',
            text,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public warningNoTitle(text: string, callback?: () => void) {
        Swal.fire({
            icon: 'warning',
            text,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public successSave(callback?: () => void) {
        const text = this.translateService.instant('ACTION.RESULT_COMPLETED');
        this.success(text, callback);
    }

    public successCopy(callback?: () => void) {
        const text = this.translateService.instant('ACTION.COPY_COMPLETED');
        this.success(text, callback);
    }

    public successOtp(callback?: () => void) {
        const text = this.translateService.instant('ACTION.RESET_OTP');
        this.success(text, callback);
    }

    public successProceed(callback?: () => void) {
        const text = this.translateService.instant('ACTION.RESULT_PROCESS_COMPLETED');
        this.success(text, callback);
    }
    public successReset(callback?: () => void) {
        const text = this.translateService.instant('ACTION.RESULT_RESET_COMPLETED');
        this.success(text, callback);
    }

    public success(text: string, callback?: () => void) {
        Swal.fire({
            icon: 'success',
            title: text,
            showConfirmButton: false,
            timer: 1500,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public warningValidate(callback?: () => void) {
        const title = this.translateService.instant('ACTION.TITLE_VALIDATE_FAIL');
        const text = this.translateService.instant('ACTION.VALIDATE_FAIL');
        this.warning(title, text, callback);
    }

    public warningValidateTest(textSwap: string, callback?: () => void) {
        const title = this.translateService.instant('ACTION.TITLE_VALIDATE_FAIL');
        const text = this.translateService.instant(textSwap);
        this.warning(title, text, callback);
    }

    public warning(title: string, text: string, callback?: () => void) {
        Swal.fire({
            icon: 'warning',
            title: this.translateService.instant(title),
            text: this.translateService.instant(text),
            showConfirmButton: false,
            timer: 1500,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }

    public warningNotitle(textLang: string, callback?: () => void) {
        const title = this.translateService.instant('ACTION.TITLE_VALIDATE_FAIL');
        const text = this.translateService.instant(textLang);
        Swal.fire({
            icon: 'warning',
            title,
            text,
            showConfirmButton: false,
            timer: 1500,
            allowOutsideClick: false
        }).then(result => {
            if (callback !== undefined) { callback(); }
        });
    }
}
