import { Component, inject } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-floating-controls',
  imports: [LucideAngularModule],
  templateUrl: './floating-controls.html',
})
export class FloatingControls {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly theme = inject(ThemeService);
}
