import Link from "fumadocs-core/link";

export default function HomePage() {
  return (
    <main className="text-fd-foreground pt-4 pb-6 md:pb-12">
      <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="text-2xl font-bold mb-4">Hello World</h1>
        <div>
          <Link href="/docs" className="bg-fd-primary text-fd-background px-4 py-2 rounded-md">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
