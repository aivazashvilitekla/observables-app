import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'task1',
    loadChildren: () =>
      import('./pages/first/first.module').then((m) => m.FirstModule),
  },
  {
    path: 'task2',
    loadChildren: () =>
      import('./pages/second/second.module').then((m) => m.SecondModule),
  },
  {
    path: 'task3',
    loadChildren: () =>
      import('./pages/third/third.module').then((m) => m.ThirdModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
