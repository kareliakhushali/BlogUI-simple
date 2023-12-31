import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';
import { PostsComponent } from './posts/posts.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {
    path:'',
    component:PostsComponent
  },
  {
    path:'view-post/:id',
    component:ViewPostComponent
  },
  {
    path:'admin/posts',
    component:AdminPostsComponent
  },
  {
    path : 'admin/posts/add',
    component : AdminAddPostComponent
  },
  {
    path : 'admin/posts/:id',
    component : AdminViewPostComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
