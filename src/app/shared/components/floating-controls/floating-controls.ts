import { Component, signal } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-floating-controls',
  imports: [LucideAngularModule],
  templateUrl: './floating-controls.html',
})
export class FloatingControls {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly isLightTheme = signal(false);

  onToggleTheme(): void {
    this.isLightTheme.set(!this.isLightTheme());
  }
}
