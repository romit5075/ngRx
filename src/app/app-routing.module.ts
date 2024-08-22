import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
