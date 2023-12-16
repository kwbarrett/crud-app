import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'post/home', component: HomeComponent },
  { path: 'post', redirectTo: 'post/home', pathMatch: 'full'  },
  { path: '', redirectTo: 'post/home', pathMatch: 'full' },
  { path: 'post/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
