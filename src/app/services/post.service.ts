import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { updatePostRequest } from '../models/update-post';
import { AddPostRequest } from '../models/add-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseApiUrl = 'https://localhost:44353/api/Posts/';

constructor(private http : HttpClient) { }

getAllPosts():Observable<Post[]>
{
  return this.http.get<Post[]>(this.baseApiUrl);
}
getPostById(id:string):Observable<Post>
{
  return this.http.get<Post>(this.baseApiUrl + id);
}
updatePost(id:string | undefined ,updatePostRequest: updatePostRequest) :Observable<Post>
{
  return this.http.put<Post>(this.baseApiUrl + id , updatePostRequest);
}
addPost(addPostRequest: AddPostRequest):Observable<Post>
{
  return this.http.post<Post>(this.baseApiUrl , addPostRequest);
}
deletePost(id:string | undefined):Observable<Post>
{
  return this.http.delete<Post>(this.baseApiUrl + id);
}
}
