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

import { ResolutionRateComponent } from '../pages/home/resolution-rate/resolution-rate.component';
import { PortfolioDistributionComponent } from '../pages/home/portfolio-distribution/portfolio-distribution.component';
import { StatewiseComponent } from '../pages/home/statewise/statewise.component';
import { LivePaymentComponent } from '../pages/home/live-payment/live-payment.component';
import { SettlementOfferComponent } from '../pages/home/settlement-offer/settlement-offer.component';
import { ResolutionTrendComponent } from '../pages/home/resolution-trend/resolution-trend.component';
import { PortfolioComponent } from '../pages/home/portfolio/portfolio.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
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
    ShareModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatRadioModule,MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,MatDatepickerModule,
    MatDividerModule,
    MatProgressBarModule,MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule, 
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
   
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
