import { TitleCasePipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { ProjectFilter } from '../../../../shared/models/projects.model';

@Component({
  selector: 'app-navigation-bar',
  imports: [TitleCasePipe],
  templateUrl: './navigation-bar.html',
})
export class NavigationBar {
  readonly filters = Object.values(ProjectFilter);
  readonly activeFilter = signal<ProjectFilter>(ProjectFilter.ALL);
  readonly filterChange = output<ProjectFilter>();

  onFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
    this.filterChange.emit(filter);
  }
}
