import { Component, signal } from '@angular/core';
import { GALLERY_ALBUMS } from '../../shared/consts/gallery.const';
import { GalleryAlbum } from '../../shared/models/gallery.model';
import { Lightbox } from './components/lightbox/lightbox';

@Component({
  selector: 'app-gallery',
  imports: [Lightbox],
  templateUrl: './gallery.html',
})
export class Gallery {
  readonly albums = GALLERY_ALBUMS;
  readonly activeAlbum = signal<GalleryAlbum | null>(null);
  readonly initialIndex = signal(0);

  onOpenPhoto(album: GalleryAlbum, index: number): void {
    this.activeAlbum.set(album);
    this.initialIndex.set(index);
  }

  onClosePhoto(): void {
    this.activeAlbum.set(null);
  }
}
