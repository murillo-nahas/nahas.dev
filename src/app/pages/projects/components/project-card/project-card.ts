import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly name = input.required<string>();
  readonly description = input.required<string>();
  readonly date = input.required<string>();
  readonly link = input.required<string>();
  readonly techs = input.required<string[]>();
}
