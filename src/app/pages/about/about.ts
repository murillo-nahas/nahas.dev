import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Connect } from '../../shared/components/connect/connect';
import { READING_LIST } from '../../shared/consts/reading-list.const';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, Connect],
  templateUrl: './about.html',
})
export class About {
  readonly readingList = READING_LIST;
}
