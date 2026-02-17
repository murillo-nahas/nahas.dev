import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { POSTS } from '../../../shared/consts/posts.const';
import { Post } from '../../../shared/models/posts.model';

@Component({
  selector: 'app-post-detail',
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './post-detail.html',
})
export class PostDetail {
  readonly slug = input.required<string>();

  readonly post = computed<Post | undefined>(() =>
    POSTS.find((p) => p.slug === this.slug())
  );

  readonly markdownSrc = computed<string>(
    () => `posts/${this.slug()}.md`
  );
}
