import { Injectable } from '@angular/core';
import { CategotyModel } from '@core/class/master/categoty-model';
import { ProductModel } from '@core/class/master/product-model';
import { FileListModel, FileModel } from '@core/class/_shared/file.model';
import { ApiPath } from '@core/http/api-path';
import { ApiService } from '@core/http/api.service';
import { CategotyListCont } from './_mock/categoty.const';
import { ProductListCont } from './_mock/product.const';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  postData(arg0: string, input: any, arg2: boolean) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private apiService: ApiService,
  ) { }

  async uploadFile(file: File): Promise<FileModel> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileType', '1');
    const fileApiModel = await this.apiService.post<FileModel>(`${ApiPath.uploads.uploadFile}`, formData);
    // let fileModel: FileModel = null;
    // if(fileApiModel){
    //   fileModel = this.mapper.mapFrom(fileApiModel);
    // }
    return fileApiModel!;
  }
  async uploadListFile(file: File): Promise<FileListModel> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('fileType', '1');
    const fileApiModel = await this.apiService.post<FileListModel>(`${ApiPath.uploads.uploadFile}`, formData);
    // let fileModel: FileModel = null;
    // if(fileApiModel){
    //   fileModel = this.mapper.mapFrom(fileApiModel);
    // }
    return fileApiModel!;
  }
  async getFile(id: number): Promise<FileModel> {
    const result = await this.apiService.get<FileModel>(`${ApiPath.uploads.getFile}/${id}`);
    return result!;
  }


  // async getFilterMpList(): Promise<FilterListModal[]> {
  //   const result = ListConst
  //   return result!
  // }

  async getProductList(): Promise<ProductModel[]> {
    const result = ProductListCont;
    return result!
  }

  async getCategoryList(): Promise<CategotyModel[]> {
    const result = CategotyListCont;
    return result!
  }

}
export class FilterListModal {
  isCheck: boolean = true
  id: number;
  code: string;
  name: string;
  isBoolean: boolean;
}


export class CommonModel {
  isCheck: boolean = true
  id: number;
  name: string;
  code: string;
  isBoolean: boolean;
}


export class ProvinceModel {
  id: number;
  name_in_thai: string;
  name_in_english: string;

}

export class DistrictModel {
  id: number;
  name_in_thai: string;
  name_in_english: string;
}

export class SubdistrictModel {
  id: number;
  name_in_thai: string;
  name_in_english: string;
  zip_code: number;
}

export class SubdistrictModel1 {
  nationalityId: number;
  nationalityName: string;
  nationalityCode: string;
}

export class NationalityModel {
  nationalityId: number;
  nationalityName: string;
  nationalityCode: string;
}

export class RaceModel {
  raceId: number;
  raceCode: string;
  raceName: string;
}

export class ReligionModel {
  religionId: number;
  religionCode: string;
  religionName: string;
}

export class Model {
  id: number;
  nameTH: string;
  nameEN: string;
}

export class PreNameModel {
  preNameId: number;
  preNameCode: string;
  preNameName: string;
}