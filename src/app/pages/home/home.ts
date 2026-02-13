import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Connect } from '../../shared/components/connect/connect';

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, Connect],
  templateUrl: './home.html',
})
export class Home {

  readonly experience: Experience[] = [
    {
      title: 'Full-Stack Software Engineer',
      company: 'Merch',
      date: '2024 · Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      title: 'Mobile Software Engineer',
      company: 'Be220',
      date: '2024 · 2025',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      title: 'Mobile Software Engineer',
      company: 'Bradesco Seguros',
      date: '2022 · 2024',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
  ];
}
