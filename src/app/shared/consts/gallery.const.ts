import { GalleryAlbum } from '../models/gallery.model';

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    title: 'Porto Seguro, Bahia',
    year: '2026',
    photos: [
      { src: 'assets/gallery/portoseguro/acaraje.webp', alt: 'acaraje' },
      { src: 'assets/gallery/portoseguro/beer.webp', alt: 'beer' },
      { src: 'assets/gallery/portoseguro/dig.webp', alt: 'dig' },
      { src: 'assets/gallery/portoseguro/petitgateau.webp', alt: 'petit gateau' },
      { src: 'assets/gallery/portoseguro/plane.webp', alt: 'plane' },
    ],
  },
  {
    title: 'Brotas, SP',
    year: '2025',
    photos: [
      { src: 'assets/gallery/brotas/brunch.webp', alt: 'brunch' },
      { src: 'assets/gallery/brotas/chalet.webp', alt: 'chalet' },
      { src: 'assets/gallery/brotas/pasta.webp', alt: 'pasta' },
      { src: 'assets/gallery/brotas/porsche.webp', alt: 'porsche' },
      { src: 'assets/gallery/brotas/street.webp', alt: 'street' },
    ],
  },
];
