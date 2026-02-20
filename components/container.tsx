import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl w-full bg-transparent px-6 md:px-12 py-6 md:py-12",
        className
      )}
    >
      {children}
    </div>
  );
}