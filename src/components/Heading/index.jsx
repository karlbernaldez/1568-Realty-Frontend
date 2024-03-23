import React from "react";

const sizes = {
  "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "2xl": "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  xl: "text-2xl font-bold md:text-[22px]",
  s: "text-sm font-bold",
  md: "text-base font-bold",
  xs: "text-xs font-bold leading-[246%]",
  lg: "text-lg font-bold leading-[150%]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
