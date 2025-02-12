import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/utils/shadcn"

const containerVariants = cva(
  "w-full mx-auto",
  {
    variants: {
      variant: {
        default:
          "",
      },
      size: {
        default: "max-w-[1024px] px-4 sm:px-6",
        sm: "max-w-[480px] px-4",
        md: "max-w-[820px] px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Container({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="div"
      className={cn(containerVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Container, containerVariants }
