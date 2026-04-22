import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
}

export function Card({ 
  children, 
  className, 
  glass = true, 
  hover = true,
  ...props 
}: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-2xl border border-white/5 overflow-hidden transition-all duration-300",
        glass && "glass-morphism",
        hover && "hover:border-accent/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4 border-t border-white/5 bg-white/[0.02]", className)} {...props}>
      {children}
    </div>
  );
}
