import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path:'**',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: ContentLayoutComponent,
    loadChildren: './modules/home/home.module#HomeModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
