import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Connect } from '../../shared/components/connect/connect';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, Connect],
  templateUrl: './about.html',
})
export class About {
}
