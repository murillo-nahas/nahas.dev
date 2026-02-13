import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  imports: [],
  templateUrl: './tech-badge.html',
})
export class TechBadge {
  readonly tech = input.required<string>();
}
