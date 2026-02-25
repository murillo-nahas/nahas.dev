import { Component, HostListener, computed, input, output, signal } from '@angular/core';
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
  readonly initialIndex = input<number>(0);

  readonly close = output<void>();

  readonly currentIndex = signal(0);
  readonly isTransitioning = signal(false);

  readonly activePhoto = computed(() => this.album().photos[this.currentIndex()]);

  ngOnInit(): void {
    this.currentIndex.set(this.initialIndex());
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.onPrev();
    }

    if (event.key === 'ArrowRight') {
      this.onNext();
    }

    if (event.key === 'Escape') {
      this.close.emit();
    }
  }

  onPrev(): void {
    this.transition(() => {
      const len = this.album().photos.length;
      this.currentIndex.set((this.currentIndex() - 1 + len) % len);
    });
  }

  onNext(): void {
    this.transition(() => {
      const len = this.album().photos.length;
      this.currentIndex.set((this.currentIndex() + 1) % len);
    });
  }

  private transition(changeFn: () => void): void {
    this.isTransitioning.set(true);
    setTimeout(() => {
      changeFn();
      this.isTransitioning.set(false);
    }, 150);
  }
}
