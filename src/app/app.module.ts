import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// servicios
import { InfoService } from "./services/info.service";
import { SchoolsService } from './services/schools.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EscuelasComponent } from './components/escuelas/escuelas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { BlogComponent } from './components/blog/blog.component';
import { CoachComponent } from './components/coach/coach.component';
import { KistoreComponent } from './components/kistore/kistore.component';
import { TutosComponent } from './components/tutos/tutos.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';
import { AddEscuelaComponent } from './components/escuelas/add-escuela/add-escuela.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EscuelasComponent,
    TorneosComponent,
    BlogComponent,
    CoachComponent,
    KistoreComponent,
    TutosComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    AddEscuelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    InfoService,
    SchoolsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
