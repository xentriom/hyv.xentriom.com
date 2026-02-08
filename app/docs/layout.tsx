import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { iconLinks, baseOptions } from "@/components/layout/shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout {...baseOptions()} tree={source.getPageTree()} links={iconLinks}>
      {children}
    </DocsLayout>
  );
}
