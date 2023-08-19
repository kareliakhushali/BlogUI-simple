import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { AddPostRequest } from 'src/app/models/add-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }
post : AddPostRequest = {
  author : '',
  content : '',
  featuredImageHandle : '',
  publishedDate : '',
  summary:'',
  title : '',
  updatedDate : '',
  urlHandle:'',
  visible : true


}
  ngOnInit() {
  }

  onSubmit():void
  {
    this.postService.addPost(this.post)
    .subscribe(
      response=>{
        alert('Sucess');
      }
    );

  }
}
