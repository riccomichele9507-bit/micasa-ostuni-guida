// Photo manifest.
// Drop optimized images (ideally .webp) into /public/images and point to them here.
// Leave a value as '' (or an empty array) to fall back to the built-in placeholder.
//
// Recommended sizes: hero 1920×1080 (landscape); check-in photos ~1200×900 (4:3).
export interface ImageManifest {
  /** Welcome / hero background photo. e.g. '/images/hero.webp' */
  hero: string
  /** Up to 2 photos shown in the Check-in card. e.g. ['/images/checkin-1.webp', '/images/checkin-2.webp'] */
  checkin: string[]
}

export const IMAGES: ImageManifest = {
  hero: '',
  checkin: ['', ''],
}
