import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminPaginatorComponent } from 'app/shared/admin/paginator/paginator.component';
import { locale as en } from 'assets/i18n/en';
import { locale as th } from 'assets/i18n/th';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('pagination', { static: false }) pagination: AdminPaginatorComponent;
  public contentHeader: object;
  constructor(
    ) {
  }

  ngOnInit(): void {
    
  }

  onClickView() {}
  onClickEdit() {}
  onDeleteClick() {}

  onPageChange(page: number) {
    // this.pageRequest.pageNumber = page;
    // this.loadDataList();
  }

  onPageSizeChange(pageSize: number) {
    // this.pageRequest.pageSize = pageSize;
    // this.loadDataList();
  }

  

}
