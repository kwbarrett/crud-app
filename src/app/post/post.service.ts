import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient ) { }

  getAll(){
    return this.http.get<Post[]>( 'https://jsonplaceholder.typicode.com/posts' );
  }

}
