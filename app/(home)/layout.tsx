import Link from "fumadocs-core/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { Book, ComponentIcon, Pencil, PlusIcon, Server } from "lucide-react";
import { linkItems, iconLinks, baseOptions } from "@/components/layout/shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [{ text: "Getting Started", url: "/docs", icon: <Book /> }],
        },
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs">Getting Started</NavbarMenuLink>
                <NavbarMenuLink href="/docs/what-is-hoyovista">What is HoYoVista?</NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
        ...iconLinks,
      ]}
    >
      {children}
    </HomeLayout>
  );
}
