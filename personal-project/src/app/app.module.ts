import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './global/global.component';
import { NavComponent } from './global/nav/nav.component';
import { HeroComponent } from './global/hero/hero.component';
import { GalleryComponent } from './global/gallery/gallery.component';
import { FormComponent } from './global/form/form.component';
import { FormsModule } from '@angular/forms';
import { EncuestaComponent } from './global/form/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    HeroComponent,
    GalleryComponent,
    FormComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
