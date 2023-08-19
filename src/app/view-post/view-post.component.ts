import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
post : Post | undefined;
  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params=>{
        const id = params.get('id');
        if(id){
          this.postService.getPostById(id)
          .subscribe(
            response=>{
              this.post = response;

            }
          );
        }
      }
    )
  }

}
