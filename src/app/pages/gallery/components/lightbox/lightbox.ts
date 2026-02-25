import { Component, computed, input, output } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight, X } from 'lucide-angular';
import { GalleryAlbum } from '../../../../shared/models/gallery.model';

@Component({
  selector: 'app-lightbox',
  imports: [LucideAngularModule],
  templateUrl: './lightbox.html',
})
export class Lightbox {
  readonly chevronLeftIcon = ChevronLeft;
  readonly chevronRightIcon = ChevronRight;
  readonly closeIcon = X;

  readonly album = input.required<GalleryAlbum>();
  readonly photoIndex = input.required<number>();

  readonly close = output<void>();
  readonly prev = output<void>();
  readonly next = output<void>();

  readonly activePhoto = computed(() => this.album().photos[this.photoIndex()]);
}
