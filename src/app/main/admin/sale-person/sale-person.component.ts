import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminPaginatorComponent } from 'app/shared/admin/paginator/paginator.component';
import { FormSalePersonModalComponent } from './model/form-sale-person-modal/form-sale-person-modal.component';

@Component({
  selector: 'app-sale-person',
  templateUrl: './sale-person.component.html',
  styleUrls: ['./sale-person.component.scss']
})
export class SalePersonComponent implements OnInit {
  @ViewChild('pagination', { static: false }) pagination: AdminPaginatorComponent;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  loadDataList() {}

  onClickCreate() {
    const modalRef = this.modalService.open(FormSalePersonModalComponent, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: 'lg'
    });
    modalRef.result.then(() => this.loadDataList());
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
