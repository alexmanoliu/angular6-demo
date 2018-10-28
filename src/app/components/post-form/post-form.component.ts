import { Posts } from './../../models/Posts';
import { PostService } from './../../services/post.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';




@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
 @Output() newPost: EventEmitter<Posts> = new EventEmitter();
 @Output() updatedPost: EventEmitter<Posts> = new EventEmitter();
 @Input() currentPost: Posts;
 @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({title, body} as Posts).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }

}
