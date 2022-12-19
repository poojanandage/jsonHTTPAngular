import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './shared/component/all-post/all-post.component';
import { CreatePostComponent } from './shared/component/create-post/create-post.component';
import { UppostComponent } from './shared/component/uppost/uppost.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'home', pathMatch : 'full',
  },
  {
    path : 'home' , component : AllPostComponent,
  },
  {
    path : 'createpost' , component : CreatePostComponent,
  },
  {
    path : 'updatepost/:id' , component : UppostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
