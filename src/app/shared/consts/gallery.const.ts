import { GalleryAlbum } from '../models/gallery.model';

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    title: 'Porto Seguro, Bahia',
    year: '2026',
    photos: [
      { src: 'assets/gallery/portoseguro/acaraje.jpeg', alt: 'acaraje' },
      { src: 'assets/gallery/portoseguro/beer.jpeg', alt: 'beer' },
      { src: 'assets/gallery/portoseguro/dig.jpeg', alt: 'dig' },
      { src: 'assets/gallery/portoseguro/petitgateau.jpeg', alt: 'petit gateau' },
      { src: 'assets/gallery/portoseguro/plane.jpeg', alt: 'plane' },
    ],
  },
  {
    title: 'Brotas, SP',
    year: '2025',
    photos: [
      { src: 'assets/gallery/brotas/brunch.jpeg', alt: 'brunch' },
      { src: 'assets/gallery/brotas/chalet.jpeg', alt: 'chalet' },
      { src: 'assets/gallery/brotas/pasta.jpeg', alt: 'pasta' },
      { src: 'assets/gallery/brotas/porsche.jpeg', alt: 'porsche' },
      { src: 'assets/gallery/brotas/street.jpeg', alt: 'street' },
    ],
  },
];
