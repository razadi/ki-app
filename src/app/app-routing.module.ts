import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { TutosComponent } from './components/tutos/tutos.component';
import { EscuelasComponent } from './components/escuelas/escuelas.component';
import { TorneosComponent } from './components/torneos/torneos.component';
import { BlogComponent } from './components/blog/blog.component';
import { KistoreComponent } from './components/kistore/kistore.component';
import { CoachComponent } from './components/coach/coach.component';

import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';

const routes: Routes = [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'tutoriales', component: TutosComponent },
      { path: 'escuelas', component: EscuelasComponent },
      { path: 'torneos', component: TorneosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'kistore', component: KistoreComponent },
      { path: 'coach', component: CoachComponent },

      { path: 'kiapp', component: AboutComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contacto', component: ContactComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule'}
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
