"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React, { forwardRef } from "react";

export type MotionProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
};

export const Motion = forwardRef<HTMLDivElement, MotionProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

Motion.displayName = "Motion";