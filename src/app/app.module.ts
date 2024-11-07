import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumeroDobleComponent } from './components/numero-doble/numero-doble.component';
import { TablaMultiplicarRoutingComponent } from './components/tabla-multiplicar-routing/tabla-multiplicar-routing.component';
import { MenuTablaComponent } from './components/menu-tabla/menu-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    CineComponent,
    HomeComponent,
    MenuComponent,
    NotfoundComponent,
    NumeroDobleComponent,
    TablaMultiplicarRoutingComponent,
    MenuTablaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
