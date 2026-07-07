import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          size === "default" && "px-4 py-2",
          size === "sm" && "px-3 py-1.5 text-xs",
          size === "lg" && "px-6 py-3 text-base",
          variant === "primary" &&
            "bg-gold text-background hover:bg-gold-light focus:ring-gold",
          variant === "secondary" &&
            "bg-surface text-text hover:bg-surface-light focus:ring-surface",
          variant === "outline" &&
            "border-2 border-gold text-gold hover:bg-gold hover:text-background focus:ring-gold",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
