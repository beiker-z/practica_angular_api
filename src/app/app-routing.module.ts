import { DetailarticleComponent } from './components/detailarticle/detailarticle.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'detail-article', component: DetailarticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
