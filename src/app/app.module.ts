import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { ResultsComponent } from './results/results.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routing';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ResultsComponent,
    FirstComponent,
    SecondComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
