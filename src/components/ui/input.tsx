import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const placeVariants = cva(
  "absolute top-1/2 -translate-y-1/2 text-slatefor text-base px-3 py-[9px] font-bold bg-slateone",
  {
    variants: {
      variant: {
        currency: "left-[1px] rounded-l-md",
        years: "right-[1px] rounded-r-md",
      },
      error: {
        true: "bg-rede text-white",
        false: "text-slatefor"
      }
    },
    defaultVariants: {
      error: false,
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof placeVariants> {
  icon?: React.ReactNode;
  erro?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, variant, error, ...props }, ref) => {

    return (
      <div className="relative w-full">
        {icon && (
          <span className={cn(placeVariants({ variant, error }))}>
            {icon}
          </span>
        )}
        <input
          autoComplete="none"
          type={type}
          className={cn(
            "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none flex h-11 w-full rounded-md border border-slatetre bg-transparent text-2xl font-bold text-slatefiv shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            variant == "currency" ? "pl-12" : "",
            variant == "years" ? "pl-4" : "",
            error ? "border-rede" : "",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
