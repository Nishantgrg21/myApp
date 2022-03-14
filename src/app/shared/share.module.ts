import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
  ]
})
export class ShareModule { }
