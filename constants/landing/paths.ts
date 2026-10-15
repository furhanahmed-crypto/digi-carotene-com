import { DM_HYD_PATH } from "@/constants/landing/digital-marketing-hyderabad"
import { WEBSITE_DEV_HYD_PATH } from "@/constants/landing/website-development-hyderabad"

/** Local SEO landing routes — trailing slash variants for Next pathname checks. */
export const LANDING_PATHS = new Set([
  WEBSITE_DEV_HYD_PATH,
  `${WEBSITE_DEV_HYD_PATH}/`,
  DM_HYD_PATH,
  `${DM_HYD_PATH}/`,
])

export function isLandingPath(pathname: string) {
  return LANDING_PATHS.has(pathname)
}
