import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}


export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-white text-background hover:bg-gray-200",
    accent: "bg-accent text-background hover:scale-105 active:scale-95 neon-glow-green",
    secondary: "bg-secondary text-white hover:scale-105 active:scale-95 neon-glow-blue",
    outline: "bg-transparent border border-white/10 text-white hover:bg-white/5",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "font-orbitron font-bold uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </motion.button>
  );
}
