import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MainContentModule } from './main-content/main-content.module';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './shared/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,

    FooterComponent,
    LoginComponent,
    RegComponent,
    HomeComponent,
    NoPageFoundComponent,
    ErrorComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MainContentModule,
    HttpClientModule,
  ],
})
export class AppModule {}
