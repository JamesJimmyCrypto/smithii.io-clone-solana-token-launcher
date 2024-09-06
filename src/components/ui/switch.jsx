"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#00838F] data-[state=unchecked]:bg-[#000] dark:focus-visible:ring-orange-700 dark:focus-visible:ring-offset-purple-950",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 bg-[#00ACC1] data-[state=checked]:bg-[#18a2b4] data-[state=unchecked]:bg-[#E0E0E0]"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

