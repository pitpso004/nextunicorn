 

export interface PageSortModel {
  column: string;
  direction: string;
}
export class PageResponseModel<T> {
  pageNumber: number;
  totalItemCount: number = 0;
  pageCount: number;
  pageSize: number;
  items: T[];
  userLastUpdate?: string;
  lastTimeUpdate?: string;
  get startIndex(): number {
    if (this.totalItemCount == 0) return 0;
    return (this.pageNumber - 1) * this.pageSize + 1;
  }

  static transform<T>(result: any): PageResponseModel<T> {
    const page = new PageResponseModel<T>();
    page.pageNumber = result.pageNumber;
    page.pageSize = result.pageSize;
    page.totalItemCount = result.totalItemCount;
    page.items = result.items;
    page.pageCount = result.pageCount;

    return page;
  }

  static Create<T>(items: T[]): PageResponseModel<T> {
    const page = new PageResponseModel<T>();
    page.pageNumber = 1;
    page.pageSize = 20;
    page.totalItemCount = items.length;
    page.items = items;
    page.pageCount = 5;
    return page;
  }
}

export class PageRequestModel<C> {
  pageNumber: number;
  pageSize: number;
  criteria: C;
  sort?: PageSortModel;

  static createFirst<C>(type: new () => C): PageRequestModel<C> {
    const page = new PageRequestModel<C>();
    page.pageNumber = 1;
    page.pageSize = 10;
    page.criteria = new type();
    return page;
  }

  setSort(column: string, direction: string) {
    this.sort = { column, direction };
  }
}



export class PageRequestPMDSModel<C> {
  pageSize: number;
  page: number;
  criteria: C;
  sort?: PageSortModel;

  static createFirst<C>(type: new () => C): PageRequestPMDSModel<C> {
    const page = new PageRequestPMDSModel<C>();
    page.page = 1;
    page.pageSize = 10;
    page.criteria = new type();
    return page;
  }

  setSort(column: string, direction: string) {
    this.sort = { column, direction };
  }
}



export class PagePMDSResponse<T>{
  items: T[] = [];
  pageNo: number = 1;
  pageSize: number = 1;
  totalItemCount?: any;
  totalPage: number = 1;
  totalRecord: number = 1;
}

export class PageItems<T> {
  contents: PagePMDSResponse<T> = new PagePMDSResponse<T>();
}

export class PagePositionRequestItems<T> {
  kind: string = ''
  positionName: string = ''
  positionAlreadyRequests: PageResponseModel<T> = new PageResponseModel<T>();
}









 