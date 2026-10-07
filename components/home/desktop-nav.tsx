"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  serviceMegaFooter,
  serviceMegaItems,
} from "@/constants/home/mega-menu"
import {
  mainNav,
  type NavItem,
  type NavLinkItem,
} from "@/constants/home/navigation"

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} />}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          {children ? (
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          ) : null}
        </div>
      </NavigationMenuLink>
    </li>
  )
}

function DropdownContent({ items }: { items: NavLinkItem[] }) {
  return (
    <ul className="w-80">
      {items.map((item) => (
        <ListItem key={item.href} title={item.title} href={item.href}>
          {item.description}
        </ListItem>
      ))}
    </ul>
  )
}

function ServicesMegaMenu() {
  return (
    <div className="w-[min(92vw,720px)] p-3">
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
        {serviceMegaItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.href + item.title}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className="flex items-start gap-3 rounded-xl p-3 hover:bg-secondary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/20 text-ink">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </NavigationMenuLink>
            </li>
          )
        })}
      </ul>
      <div className="mt-2 border-t border-border pt-2">
        <NavigationMenuLink
          render={<Link href={serviceMegaFooter.href} />}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-brand-yellow"
        >
          {serviceMegaFooter.label}
          <ArrowRight className="size-3.5" />
        </NavigationMenuLink>
      </div>
    </div>
  )
}

function NavEntry({ item }: { item: NavItem }) {
  if (item.type === "link") {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          render={<Link href={item.href} />}
          className={navigationMenuTriggerStyle()}
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  if (item.type === "dropdown") {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <DropdownContent items={item.items} />
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ServicesMegaMenu />
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {mainNav.map((item) => (
          <NavEntry key={item.title} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
