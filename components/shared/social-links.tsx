import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/shared/social-icons"
import { siteContact } from "@/constants/site/contact"
import { cn } from "@/lib/utils"

const iconByLabel = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
} as const

type SocialLinksProps = {
  className?: string
  linkClassName?: string
}

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {siteContact.socials.map((social) => {
        const Icon = iconByLabel[social.label]
        return (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border border-border bg-brand-yellow text-ink transition-colors hover:bg-brand-yellow/90",
                linkClassName
              )}
            >
              <Icon className="size-4" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
