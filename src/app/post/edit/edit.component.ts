import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  formData: Post = {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (param)=>{
      let id = Number( param.get( 'id' ) )
      this.getByid(id);
    } )
  }

  getByid( id: number ){
    this.postService.edit( id ).subscribe( (data)=>{
      this.formData = data;
    } )
  }

  update(){
    this.postService.update( this.formData ).subscribe({
      next: ( data ) => {
        this.router.navigate( ['/post/home'] );
      },
      error: ( er )=>{
        console.log( er );
      }
    })
  }
}
