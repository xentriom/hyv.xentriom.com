import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, Heart, LayoutTemplate } from "lucide-react";
import Image from "next/image";
import { Github, Discord } from "../nucleo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/logo.png" alt="HoYoVista" width={20} height={20} />
          <span className="font-medium">HoYoVista</span>
        </>
      ),
    },
  };
}

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: "Blog",
    url: "/blog",
    active: "nested-url",
  },
  {
    text: "Showcase",
    url: "/showcase",
    icon: <LayoutTemplate />,
    active: "url",
  },
  {
    text: "Sponsors",
    url: "/sponsors",
    icon: <Heart />,
  },
];

export const iconLinks: LinkItemType[] = [
  {
    type: "icon",
    url: "https://discord.gg/5rUsSZTyf2",
    label: "discord",
    text: "Discord",
    external: true,
    icon: <Discord />,
  },
  {
    type: "icon",
    url: "https://github.com/xentriom/hyv.xentriom.com",
    label: "github",
    text: "GitHub",
    external: true,
    icon: <Github />,
  },
];
