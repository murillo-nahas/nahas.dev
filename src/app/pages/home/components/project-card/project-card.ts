import { Component, input } from '@angular/core';
import { TechBadge } from '../tech-badge/tech-badge';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  imports: [TechBadge, LucideAngularModule],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly linkIcon = ExternalLink;

  readonly name = input.required<string>();
  readonly description = input.required<string>();
  readonly link = input.required<string>();
  readonly techs = input.required<string[]>();
}
