import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'post/home', component: HomeComponent },
  { path: 'post', redirectTo: 'post/home', pathMatch: 'full'  },
  { path: '', redirectTo: 'post/home', pathMatch: 'full' },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
