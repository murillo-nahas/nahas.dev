import { Component } from '@angular/core';
import { POSTS } from '../../shared/consts/posts.const';
import { PostCard } from './components/post-card/post-card';

@Component({
  selector: 'app-posts',
  imports: [PostCard],
  templateUrl: './posts.html',
})
export class Posts {
  readonly posts = POSTS;
}
