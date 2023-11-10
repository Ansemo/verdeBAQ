import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MensajeComponent } from './shared/components/mensaje/mensaje.component';
import { TestCartasComponent } from './shared/components/test-cartas/test-cartas.component';
import { CartaComponent } from './shared/components/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MensajeComponent,
    TestCartasComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
