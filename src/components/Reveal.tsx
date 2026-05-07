import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export type RevealEffect =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom"
  | "blur";

const hiddenClass: Record<RevealEffect, string> = {
  fade: "opacity-0",
  "fade-up": "opacity-0 translate-y-8",
  "fade-down": "opacity-0 -translate-y-8",
  "fade-left": "opacity-0 translate-x-10",
  "fade-right": "opacity-0 -translate-x-10",
  zoom: "opacity-0 scale-95",
  blur: "opacity-0 blur-md scale-105",
};

interface RevealProps {
  children: ReactNode;
  effect?: RevealEffect;
  delay?: number; // ms
  duration?: number; // ms
  as?: ElementType;
  className?: string;
  /** When false, the reveal can re-trigger every time the element re-enters the viewport. */
  once?: boolean;
}

const Reveal = ({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 700,
  as: Tag = "div",
  className,
  once = true,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once });

  return (
    <Tag
      ref={ref as never}
      data-reveal
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionProperty: "opacity, transform, filter",
        willChange: "opacity, transform, filter",
      }}
      className={cn(
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0" : hiddenClass[effect],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
