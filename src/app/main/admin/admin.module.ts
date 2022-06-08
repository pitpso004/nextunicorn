import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserComponent } from './setting/user/user.component';
import { LoggingComponent } from './setting/logging/logging.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { MenuModule } from 'app/layout/components/menu/menu.module';
import { SharedModule } from 'app/shared/shared.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { SalePersonComponent } from './sale-person/sale-person.component';
import { FormSalePersonModalComponent } from './sale-person/model/form-sale-person-modal/form-sale-person-modal.component';
import { ViewSalePersonModalComponent } from './sale-person/model/view-sale-person-modal/view-sale-person-modal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    LoggingComponent,
    MainAdminComponent,
    SalePersonComponent,
    FormSalePersonModalComponent,
    ViewSalePersonModalComponent,
    
  ],
  entryComponents: [
    FormSalePersonModalComponent,
    ViewSalePersonModalComponent,
  ],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    FormsModule,
    MiscellaneousModule,
    AdminRoutingModule,
    MenuModule,
    SharedModule,
    CardSnippetModule,
    RouterModule
  ],
})
export class AdminModule { }
