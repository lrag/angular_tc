import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabeceraComponent,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppModule.rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  public static rutas:Routes = [
    {
      path : "componente1",
      component : Componente1Component
    },
    {
      path : "componente2",
      component : Componente2Component
    },
    {
      path : "componente2/:dato1/:dato2",
      component : Componente2Component
    },
  ]

}





