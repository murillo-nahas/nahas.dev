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
  readonly activePhotoIndex = signal(0);

  onOpenPhoto(album: GalleryAlbum, index: number): void {
    this.activeAlbum.set(album);
    this.activePhotoIndex.set(index);
  }

  onClosePhoto(): void {
    this.activeAlbum.set(null);
  }

  onPrevPhoto(): void {
    const album = this.activeAlbum();

    if (!album) {
      return;
    }

    this.activePhotoIndex.set(
      (this.activePhotoIndex() - 1 + album.photos.length) % album.photos.length
    );
  }

  onNextPhoto(): void {
    const album = this.activeAlbum();

    if (!album) {
      return;
    }

    this.activePhotoIndex.set(
      (this.activePhotoIndex() + 1) % album.photos.length
    );
  }
}
