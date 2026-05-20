// Photo manifest.
// Optimized .webp images live in /public/images. Reference them here.
// Leave a value as '' (or an empty array) to fall back to the built-in placeholder.
export interface ImageManifest {
  /** Photos shown in the Welcome/hero, displayed side by side (up to 2). Empty = no photos. */
  welcome: string[]
  /** Up to 3 photos shown in the Check-in card (before the description). */
  checkin: string[]
  /** Photo of the hosts (Michele & Ilaria), shown in the "Your hosts" section. */
  hosts: string
}

export const IMAGES: ImageManifest = {
  welcome: [],
  checkin: ['/images/checkin-01.webp', '/images/checkin-esterni.webp', ''],
  hosts: '',
}
