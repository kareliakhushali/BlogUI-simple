import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Post[] = [];
  //post : Post | undefined;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getAllPosts()
    .subscribe(
      response=>{
this.posts = response;
//this.post = this.posts[0];
      }
    )
  }

}
