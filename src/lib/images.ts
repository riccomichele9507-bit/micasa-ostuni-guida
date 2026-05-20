// Photo manifest.
// Optimized .webp images live in /public/images. Reference them here.
// Leave a value as '' (or an empty array) to fall back to the built-in placeholder.
export interface ImageManifest {
  /** Photos shown in the Welcome/hero, displayed side by side (up to 2). */
  welcome: string[]
  /** Up to 2 photos shown in the Check-in card. */
  checkin: string[]
  /** Photo of the hosts (Michele & Ilaria), shown in the "Your hosts" section. */
  hosts: string
}

export const IMAGES: ImageManifest = {
  welcome: ['/images/welcome-04.webp', '/images/welcome-11.webp'],
  checkin: ['/images/checkin-01.webp', '/images/checkin-esterni.webp'],
  hosts: '',
}
