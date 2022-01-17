import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { CollectionComponent } from '../pages/collection/collection.component';
import { CompaignComponent } from '../pages/compaign/compaign.component';
import { RecoveryComponent } from '../pages/recovery/recovery.component';
import { ProductComponent } from '../pages/product/product.component';
import { QuariesComponent } from '../pages/quaries/quaries.component';
import { UserManagementComponent } from '../pages/user-management/user-management.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../shared/share.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CollectionComponent,
    RecoveryComponent,
    CompaignComponent,
    ProductComponent,
    QuariesComponent,
    UserManagementComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ShareModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
