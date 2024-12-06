import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadernewsComponent } from './components/headernews/headernews.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    HomeComponent,
    HeadernewsComponent,
    BasePageComponent,
    CardNoticiaComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
