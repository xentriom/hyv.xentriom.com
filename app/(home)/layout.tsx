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
                <NavbarMenuLink href="/docs" className="md:row-span-2">
                  Getting Started
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/what-is-hoyovista" className="lg:col-start-2">
                  <p className="font-medium">What is HoYoVista?</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn about HoYoVista and its features
                  </p>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/supported-games" className="lg:col-start-2">
                  <p className="font-medium">Supported Games</p>
                  <p className="text-fd-muted-foreground text-sm">
                    See which commands work with which games
                  </p>
                </NavbarMenuLink>
                <NavbarMenuLink
                  href="/docs/inviting-the-bot"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <p className="font-medium">Inviting the Bot</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Add HoYoVista to your Discord server
                  </p>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/faq" className="lg:col-start-3 lg:row-start-2">
                  <p className="font-medium">FAQ & Troubleshooting</p>
                  <p className="text-fd-muted-foreground text-sm">Common questions and fixes</p>
                </NavbarMenuLink>
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
