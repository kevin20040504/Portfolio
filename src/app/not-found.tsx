import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { button, cn, container } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className={cn(container, "flex min-h-[70dvh] flex-col items-center justify-center text-center")}>
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link href="/" className={cn(button.primary, "mt-8")}>
        <ArrowLeft aria-hidden="true" />
        Back to home
      </Link>
    </div>
  );
}
