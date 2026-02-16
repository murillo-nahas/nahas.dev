import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../shared/consts/projects.const';
import { ProjectFilter } from '../../shared/models/projects.model';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [NavigationBar, ProjectCard],
  templateUrl: './projects.html',
})
export class Projects {
  readonly activeFilter = signal<ProjectFilter>(ProjectFilter.ALL);

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();

    if (filter === ProjectFilter.ALL) {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.tag === filter);
  });

  onFilterChange(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
