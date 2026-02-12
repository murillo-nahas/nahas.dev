import { Component, signal } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './header.html',
})
export class Header {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly isLightTheme = signal(false);

  readonly links: { label: string, href: string }[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Posts',
      href: '/posts',
    },
    {
      label: 'Gallery',
      href: '/gallery',
    },
  ];

  onToggleTheme(): void {
    this.isLightTheme.set(!this.isLightTheme());
  }
}
