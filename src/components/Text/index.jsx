import React from "react";

const sizes = {
  xs: "text-[9px] font-normal leading-[11px]",
  lg: "text-sm font-normal",
  s: "text-[10px] font-normal leading-3",
  "2xl": "text-lg font-normal",
  "3xl": "text-[40px] font-normal leading-[48px] md:text-[38px] sm:text-4xl",
  xl: "text-base font-normal",
  md: "text-xs font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_01 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
