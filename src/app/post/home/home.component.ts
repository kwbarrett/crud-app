import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor( private postService: PostService ){};

  ngOnInit(): void{
    this.postService.getAll().subscribe( (data)=>{
      this.posts = data;
    } )
  }

  deletePost( id: number ){
    this.postService.delete( id ).subscribe({
      next: ( data ) => {
        this.posts = this.posts.filter( _ => _.id != id )
      },
    })
  }
}
