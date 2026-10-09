/**
 * Google Business Profile links for Digi Carotene reviews.
 * Live review content loads via Featurable (`NEXT_PUBLIC_FEATURABLE_WIDGET_ID`).
 */

export const googlePlaceId = "ChIJ8f2i9ySVyzsRoslWhqhFFz4"

/** Maps search / profile discovery. */
export const googleReviewsHref =
  "https://www.google.com/maps/search/?api=1&query=Digi+Carotene+Madhapur+Hyderabad"

/** Direct “Write a review” deep link (from digicarotene.com widget). */
export const googleWriteReviewHref = `https://search.google.com/local/writereview?placeid=${googlePlaceId}`

/** CID profile link used by the old WordPress reviews widget. */
export const googleMapsProfileHref =
  "https://maps.google.com/?cid=4474121344926534050"
