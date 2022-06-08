import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageResponseModel } from '@core/class/_shared/page.model';


@Component({
  selector: 'app-admin-table-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class AdminPaginatorComponent implements OnInit {
  @Input() page: PageResponseModel<any>;
  @Output() onPageSizeChange = new EventEmitter<number>();
  @Output() onPageChange = new EventEmitter<number>();

  lastItemInpage = 0;
  pageList: any;
  isShowPaginator = false;
  constructor() { }

  ngOnInit(): void {
    this.page = new PageResponseModel();
  }

  handlePageSizeChange(value:string){
    const pageSize = parseInt(value);
    this.onPageSizeChange.emit(pageSize);
  }

  setPagination(mode: string = '', pageNo: number, lastPage: number) {
    if ((mode === 'first' && pageNo > 1) || (mode === 'prev' && pageNo > 1) ||
      (mode === 'next' && pageNo !== lastPage) || (mode === 'last' && pageNo !== lastPage)) {
      this.page.pageNumber = this.resultPagination(mode, pageNo, lastPage);
      this.generatePage();
      this.goPageReturn();
    }
  }

  getShowing() {
    const result = (this.page.pageSize * this.page.pageNumber) - this.page.pageSize + 1;
    if (isNaN(result)) {
      return 0;
    }

    return result;
  }

  public setPageResult(page: PageResponseModel<any>) {
    this.isShowPaginator = page.totalItemCount > 0;
    this.page = page;
    this.generatePage();
  }

  private generatePage() {
    const pDt = this.pageData(this.page.pageCount, this.page.pageNumber);
    this.pageList = pDt.pageList;
    this.lastItemInpage = (this.page.pageNumber === this.page.pageCount) ? this.page.totalItemCount : (this.page.pageSize * this.page.pageNumber);
  }

  goPageObj(obj: any) {
    if (!obj.active) {
      this.page.pageNumber = obj.num;
      this.generatePage();
      this.goPageReturn();
    }
  }

  private goPageReturn() {
    this.onPageChange.emit(this.page.pageNumber);
  }

  private pageData(lastPage: number, pageNo: number) {
    let pageList = [{ num: 1, active: true }];
    let start = 1;
    let end = 1;

    if (lastPage > 1) {
      start = ((pageNo - 4) <= 0) ? 1 : (pageNo - 3);
      end = ((pageNo + 4) >= lastPage) ? lastPage : (pageNo + 3);

      pageList = [];
      for (let i = start; i <= end; i++) {
        const row = { num: i, active: (i === pageNo) ? true : false };
        pageList.push(row);
      }
    }
    return { pageList: pageList, lastPage: lastPage, start: start, end: end };
  }

  private resultPagination(mode: string = '', pageNo: number, lastPage: number) {
    let thePage = 1;
    if (mode === 'first' && pageNo > 1) {
      thePage = 1;
    } else if (mode === 'prev' && pageNo > 1) {
      if (pageNo !== 1) {
        thePage = pageNo - 1;
      }
    } else if (mode === 'next' && pageNo !== lastPage) {
      if (pageNo !== lastPage) {
        thePage = pageNo + 1;
      }
    } else if (mode === 'last' && pageNo !== lastPage) {
      thePage = lastPage;
    }

    return thePage;
  }

}
