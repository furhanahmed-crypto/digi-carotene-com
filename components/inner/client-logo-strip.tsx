import { ClientLogo } from "@/components/home/clients/client-logo"
import { clientLogos } from "@/constants/home/clients"
import { cn } from "@/lib/utils"

type ClientLogoStripProps = {
  /** Stable seed so each industry page shows a different slice of client logos. */
  seed?: string
  /** How many logos to show (default 6). */
  count?: number
  className?: string
}

function pickLogos(seed: string | undefined, count: number) {
  if (!seed) return clientLogos.slice(0, count)
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % clientLogos.length
  }
  const picked = []
  for (let i = 0; i < Math.min(count, clientLogos.length); i++) {
    picked.push(clientLogos[(hash + i) % clientLogos.length])
  }
  return picked
}

/** Clean logo row for industry / outline pages. */
export function ClientLogoStrip({
  seed,
  count = 6,
  className,
}: ClientLogoStripProps) {
  const logos = pickLogos(seed, count)

  return (
    <div className={cn("space-y-4", className)}>
      <ul
        data-reveal-group
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      >
        {logos.map((logo) => (
          <li
            key={logo.id}
            data-reveal="card"
            className="flex h-24 items-center justify-center rounded-2xl border border-border bg-white/90 px-4 shadow-sm dark:bg-card"
          >
            <ClientLogo logo={logo} size="card" className="h-9 w-auto max-w-full" />
          </li>
        ))}
      </ul>
    </div>
  )
}
