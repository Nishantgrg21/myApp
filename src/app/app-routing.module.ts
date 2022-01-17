import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CompaignComponent } from './pages/compaign/compaign.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { QuariesComponent } from './pages/quaries/quaries.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'collection',
        component:CollectionComponent
      },
      {
        path:'recovery',
        component:RecoveryComponent
      },
      {
        path:'compaign',
        component:CompaignComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'quaries',
        component:QuariesComponent
      },
      {
        path:'user-management',
        component:UserManagementComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
