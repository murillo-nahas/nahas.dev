import { effect, Injectable, signal } from '@angular/core';

const THEME_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isLight = signal(localStorage.getItem(THEME_KEY) === 'light');

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('light', this.isLight());
    });
  }

  onToggleTheme(): void {
    const html = document.documentElement;
    const next = !this.isLight();

    html.classList.add('theme-transitioning');

    this.isLight.set(next);

    localStorage.setItem(THEME_KEY, next ? 'light' : 'dark');

    setTimeout(() => html.classList.remove('theme-transitioning'), 400);
  }
}
