import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUtils {

  static getFileName(fileName: string) : string{
    const ext = fileName.substring(fileName.lastIndexOf('.')+1);
    return ext;
  } 
}
