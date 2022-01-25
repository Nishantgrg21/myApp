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
import { PortfolioOverviewComponent } from '../pages/home/portfolio-overview/portfolio-overview.component';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';
import { ResolutionRateComponent } from '../pages/home/resolution-rate/resolution-rate.component';
import { PortfolioDistributionComponent } from '../pages/home/portfolio-distribution/portfolio-distribution.component';
import { StatewiseComponent } from '../pages/home/statewise/statewise.component';
import { LivePaymentComponent } from '../pages/home/live-payment/live-payment.component';
import { SettlementOfferComponent } from '../pages/home/settlement-offer/settlement-offer.component';
import { ResolutionTrendComponent } from '../pages/home/resolution-trend/resolution-trend.component';
import { PortfolioComponent } from '../pages/home/portfolio/portfolio.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CollectionComponent,
    RecoveryComponent,
    CompaignComponent,
    ProductComponent,
    QuariesComponent,
    UserManagementComponent,
    PortfolioOverviewComponent,
    ResolutionRateComponent,
    StatewiseComponent,
    PortfolioDistributionComponent,
    LivePaymentComponent,
    SettlementOfferComponent,
    ResolutionTrendComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ShareModule,AngularmaterialModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
