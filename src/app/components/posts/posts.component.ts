import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/Posts';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Posts[];
  currentPost: Posts = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: Boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
   this.postService.getPosts().subscribe(posts => {
     this.posts = posts;
   });
  }

 onNewPost(post: Posts) {
   this.posts.unshift(post);
 }

 editPost(post: Posts) {
  this.currentPost = post;
  this.isEdit = true;
 }

 onUpdatedPost(post: Posts) {
  this.posts.forEach((curr, index) => {
    if (post.id === curr.id) {
    this.posts.splice(index, 1);
    this.posts.unshift(post);
    this.isEdit = false;
    this.currentPost = {
      id: 0,
      title: '',
      body: '',
     };
    }
   });
 }

 removePost(post: Posts) {
  if (confirm('Are you sure?')) {
   this.postService.removePost(post.id).subscribe(() => {
    this.posts.forEach((curr, index) => {
      if (post.id === curr.id) {
      this.posts.splice(index, 1);
      }
     });
   });
  }
 }
}
