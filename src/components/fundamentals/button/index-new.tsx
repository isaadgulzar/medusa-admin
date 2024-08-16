import clsx from "clsx"
import React, { Children } from "react"
import Spinner from "../../atoms/spinner"

export type ButtonProps = {
  variant: "primary" | "secondary" | "ghost" | "danger" | "nuclear"
  size?: "small" | "medium" | "large"
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "large",
      loading = false,
      children,
      ...attributes
    },
    ref
  ) => {
    const handleClick = (e) => {
      if (!loading && attributes.onClick) {
        attributes.onClick(e)
      }
    }

    const variantClassname = clsx({
      ["bg-blue text-white"]: variant === "primary",
      ["text-hex-99"]: variant === "secondary",
      ["btn-ghost"]: variant === "ghost",
      ["btn-danger"]: variant === "danger",
      ["btn-nuclear"]: variant === "nuclear",
    })

    const sizeClassname = clsx({
      ["btn-large"]: size === "large",
      ["btn-medium"]: size === "medium",
      ["btn-small"]: size === "small",
    })

    return (
      <button
        {...attributes}
        className={clsx(
          "py-[22px] px-[30px] font-architects text-xl flex items-center justify-center gap-5 disabled:bg-hex-bb disabled:text-white",
          variantClassname,
          attributes.className
        )}
        disabled={attributes.disabled || loading}
        ref={ref}
        onClick={handleClick}
      >
        {loading ? (
          <Spinner size={size} variant={"secondary"} />
        ) : (
          Children.map(children, (child, i) => {
            return (
              <span key={i} className="">
                {child}
              </span>
            )
          })
        )}
      </button>
    )
  }
)

export default Button
