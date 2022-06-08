import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { SalePersonComponent } from './sale-person/sale-person.component';
import { LoggingComponent } from './setting/logging/logging.component';
import { UserComponent } from './setting/user/user.component';

const routes: Routes = [
  {
    path: '', component: MainAdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sale-person' },
      {
        path: 'dashboard',component: DashboardComponent,
        data: { animation: 'dashboard' }
      },
      {
        path: 'setting',
        children: [
          {
            path: 'user',component: UserComponent,
            data: { animation: 'user' }
          },
          {
            path: 'logging',component: LoggingComponent,
            data: { animation: 'logging' }
          },
        ],
      },
      {
        path: 'sale-person',
        children: [
          {
            path: '',component: SalePersonComponent,
            data: { animation: 'sale-person' }
          },
          
        ],
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
