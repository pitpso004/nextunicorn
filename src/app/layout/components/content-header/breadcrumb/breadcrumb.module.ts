import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';
import { SharedModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild([]), 
    TranslateModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
