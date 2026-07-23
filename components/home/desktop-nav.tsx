"use client"

import * as React from "react"
import Link from "next/link"

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
  mainNav,
  type NavGroup,
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

function GroupsContent({ groups }: { groups: NavGroup[] }) {
  return (
    <ul className="grid w-[600px] grid-cols-3 gap-2">
      {groups.map((group) => (
        <li key={group.title} className="p-2">
          {group.href ? (
            <NavigationMenuLink render={<Link href={group.href} />}>
              <span className="font-medium">{group.title}</span>
            </NavigationMenuLink>
          ) : (
            <div className="mb-1 px-2 py-1.5 text-sm font-medium">
              {group.title}
            </div>
          )}
          {group.items?.map((item) => (
            <NavigationMenuLink
              key={item.href}
              render={<Link href={item.href} />}
              className="text-muted-foreground"
            >
              {item.title}
            </NavigationMenuLink>
          ))}
        </li>
      ))}
    </ul>
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
        <GroupsContent groups={item.groups} />
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
