import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
})
export class PostCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly date = input.required<string>();
}
