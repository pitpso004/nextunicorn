import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/admin/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
    relativeLinkResolution: 'legacy'
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
