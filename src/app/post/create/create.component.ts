import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(
    private postService: PostService,
    private router: Router
   ){}

   formData: Post = {
    userId: 1,
    id: 0,
    title: '',
    body: ''
  }

  create(){
    this.postService.create( this.formData ).subscribe({
      next: ( data ) => {
        this.router.navigate( ['/post/home'] );
      },
      error: ( er )=>{
        console.log( er );
      }
    })
  }
}
