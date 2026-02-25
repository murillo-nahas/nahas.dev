export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type GalleryAlbum = {
  title: string;
  year: string;
  photos: GalleryPhoto[];
};
