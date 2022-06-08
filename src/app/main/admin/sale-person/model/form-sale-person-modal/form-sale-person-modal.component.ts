import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategotyModel } from '@core/class/master/categoty-model';
import { ProductModel } from '@core/class/master/product-model';
import { CommonService } from '@core/services/common.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-sale-person-modal',
  templateUrl: './form-sale-person-modal.component.html',
  styleUrls: ['./form-sale-person-modal.component.scss']
})
export class FormSalePersonModalComponent implements OnInit {
  @Output() public onReturnData: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;
  productList: ProductModel[] = [];
  categotyList: CategotyModel[] = [];
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      zipCode: ['', Validators.required],
      address: ['', Validators.required],
      product: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required],
      keepDestination: ['', Validators.required],
    });
    this.getProductList()
    this.getCategoryList();
  }

  get f() {
    return this.form.controls;
  }

  async getProductList() {
    this.productList = await this.commonService.getProductList();
  }

  async getCategoryList() {
    this.categotyList = await this.commonService.getCategoryList();
  }

  onProductSelect(product: number) {

  }

  onSaveClick() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.onClose();
    // this.dialogService.confirmSaveData(() => this.doCreate());
  }

  async doCreate() {
    // const model: CreateExamTypeRequest = {
    //   name: this.form.value.name,
    //   remark: this.form.value.remark,
    //   detail: this.form.value.detail
    // };
    // const result = await this.examTypeService.create(model);
    // if (result) {
    //   this.dialogService.successProceed(() => this.activeModal.close());
    // }
  }

  onClose() {
    this.activeModal.close()
  }

}
