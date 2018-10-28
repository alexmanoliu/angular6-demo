import { Posts } from './../models/Posts';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
 postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl);
  }

  savePost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.postsUrl, post, httpOptions);
  }

  updatePost(post: Posts): Observable<Posts> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Posts>(url, post, httpOptions);
  }

  getPost(id: number): Observable<Posts> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Posts>(url);
  }

  removePost(post: Posts | number): Observable<Posts> {
   const id = typeof post === 'number' ? post : post.id;
   const url = `${this.postsUrl}/${id}`;

   return this.http.delete<Posts>(url, httpOptions);
  }

}
