import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { ApiErrorMessgeService } from './api-error-message.service';
import { environment } from 'environments/environment';
import { MyDialogService } from '@core/utils/my-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private dialogService: MyDialogService,
    private apiErrorMessgeService: ApiErrorMessgeService
  ) { }

  private handleError(error: any) {    
    if (error.error) {
      const customMessage = this.apiErrorMessgeService.getErrorText(error.error);
      this.dialogService.warningTitle(customMessage);
    }
  }



  private async execute<T>(func: Observable<T>, showLoading: boolean = true): Promise<T | null> {
    try {
      this.showLoading(showLoading);
      const result = await func.toPromise();
      this.hideLoading(showLoading);
      return result;
    } catch (error) {
      this.hideLoading(showLoading);
      this.handleError(error);
      return null;
    }
  }

  async get<T>(path: string, params: any = {}, showLoading: boolean = true): Promise<T | null> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => httpParams = httpParams.append(key, params[key]));
    const result = await this.execute(this.http.get<T>(`${environment.apiUrl}${path}`, { params: httpParams }), showLoading);
    return result;
  }

  async put<T>(path: string, body: object = {}, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.put<T>(`${environment.apiUrl}${path}`, body), showLoading);
    return result;
  } 

  async post<T>(path: string, body: object = {}, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.post<T>(`${environment.apiUrl}${path}`, body).pipe(timeout(180*1000)), showLoading);
    return result;
  }

  async search_complete<T>(path: string, body: object = {}, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.post<T>(`${environment.apiUrl}${path}`, body), showLoading);
    return result;
  }

  async postFormData<T>(path: string, body: FormData, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.post<T>(`${environment.apiUrl}${path}`, body), showLoading);
    return result;

  }

  async patch<T>(path: string, body: object = {}, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.patch<T>(`${environment.apiUrl}${path}`, body), showLoading);
    return result;
  }

  async delete<T>(path: string, body: object = {}, showLoading: boolean = true): Promise<T | null> {
    const result = await this.execute(this.http.delete<T>(`${environment.apiUrl}${path}`), showLoading);
    return result;
  }


  private showLoading(showLoading: boolean) {
    if (showLoading) {
      this.loaderService.enable();
    }
  }
  private hideLoading(showLoading: boolean) {
    if (showLoading) {
      this.loaderService.disable();
    }
  }
}
