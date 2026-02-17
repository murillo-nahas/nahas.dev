import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.html',
})
export class PostCard {
  readonly title = input.required<string>();
  readonly slug = input.required<string>();
  readonly description = input.required<string>();
  readonly date = input.required<string>();
}
