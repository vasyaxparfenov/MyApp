import { CreateHumanComponent } from './components/human-component/create-human.component';
import { HttpErrorHandlerService } from './services/httpErrorHandler.service';
import { appRoutes } from './routes';
import { HomeResolver } from './components/home-component/home.resolver';
import { HumanService } from './services/human.service';
import { RouterModule } from '@angular/router';
import { HumanComponent } from './components/human-component/human.component';
import { HomeComponent } from './components/home-component/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HumanComponent,
    CreateHumanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HumanService,
    HomeResolver,
    HttpErrorHandlerService,
    {
      provide: 'API',
      useValue: 'http://localhost:61546/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
