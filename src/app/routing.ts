import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'tarjeta', component: TarjetaComponent },
    { path: 'second/:id', component: SecondComponent },
  ];
