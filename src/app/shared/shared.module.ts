import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMainAdminComponent } from './admin/shared-main-admin/shared-main-admin.component';
import { TranslateModule } from '@ngx-translate/core';
import { AdminPaginatorComponent } from './admin/paginator/paginator.component';
import { NgxSelectModule } from 'ngx-select-ex';




@NgModule({
  declarations: [
    SharedMainAdminComponent,
    AdminPaginatorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgxSelectModule
  ],
  exports: [
    SharedMainAdminComponent,
    AdminPaginatorComponent,
    TranslateModule,
    NgxSelectModule,
  ],
})
export class SharedModule { }
