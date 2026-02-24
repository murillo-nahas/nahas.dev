import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, Moon, Sun, X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly menuIcon = Menu;
  readonly closeIcon = X;
  readonly isLightTheme = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly links: { label: string; href: string }[] = [
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

  onToggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  onCloseMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
