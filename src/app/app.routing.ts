import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumeroDobleComponent } from "./components/numero-doble/numero-doble.component";
import { MenuTablaComponent } from "./components/menu-tabla/menu-tabla.component";
import { TablaMultiplicarRoutingComponent } from "./components/tabla-multiplicar-routing/tabla-multiplicar-routing.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "numerodoble", component: NumeroDobleComponent},
    {path: "numerodoble/:num", component: NumeroDobleComponent},
    {path: "tabla/:num", component: TablaMultiplicarRoutingComponent},
    {path: "**", component: NotfoundComponent}
    
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);