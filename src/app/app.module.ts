import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './shared/share.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,  
    LayoutModule, 
    AuthModule,MatFormFieldModule
    
  ],
  exports:[ MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
