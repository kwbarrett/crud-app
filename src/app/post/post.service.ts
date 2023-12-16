import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private http: HttpClient ) { }

  getAll(){
    return this.http.get<Post[]>( 'http://localhost:3000/posts' );
  }

  create( data: Post ){
    return this.http.post( 'http://localhost:3000/posts', data );
  }

  edit( id: number ){
    return this.http.get<Post>( `http://localhost:3000/posts/${id}` );
  }

  update( data: Post ){
    return this.http.put<Post>( `http://localhost:3000/posts/${data.id}`, data );
  }

  delete( id: number ){
    return this.http.delete<Post>( `http://localhost:3000/posts/${id}` );
  }

}
