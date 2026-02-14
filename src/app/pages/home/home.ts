import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Connect } from '../../shared/components/connect/connect';
import { ProjectCard } from './components/project-card/project-card';
import { EXPERIENCES } from '../../shared/consts/experiences.const';
import { PROJECTS } from '../../shared/consts/projects.const';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Connect, ProjectCard],
  templateUrl: './home.html',
})
export class Home {
  readonly experiences = EXPERIENCES;
  readonly projects = PROJECTS;
}
