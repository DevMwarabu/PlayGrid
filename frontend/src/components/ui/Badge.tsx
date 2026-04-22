import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "accent" | "secondary" | "highlight" | "danger" | "outline" | "success";
  size?: "xs" | "sm" | "md";
  pulse?: boolean;
}

export function Badge({ 
  children, 
  className, 
  variant = "accent", 
  size = "sm",
  pulse = false,
  ...props 
}: BadgeProps) {
  const variants = {
    accent: "bg-accent/10 text-accent border-accent/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    highlight: "bg-highlight/10 text-highlight border-highlight/20",
    danger: "bg-red-500/10 text-red-500 border-red-500/20",
    success: "bg-green-500/10 text-green-500 border-green-500/20",
    outline: "bg-transparent text-gray-400 border-white/10",
  };

  const sizes = {
    xs: "px-1.5 py-0.5 text-[8px]",
    sm: "px-2 py-1 text-[10px]",
    md: "px-3 py-1.5 text-xs",
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-md border",
        variants[variant],
        sizes[size],
        pulse && "animate-pulse",
        className
      )}
      {...props}
    >
      {pulse && <span className={cn("w-1.5 h-1.5 rounded-full", variant === 'danger' ? 'bg-red-500' : 'bg-current')} />}
      {children}
    </div>
  );
}
