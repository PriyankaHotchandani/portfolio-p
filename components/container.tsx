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
        "mx-auto max-w-4xl w-full bg-white dark:bg-neutral-900 p-4 md:p-10",
        className
      )}
    >
      {children}
    </div>
  );
}