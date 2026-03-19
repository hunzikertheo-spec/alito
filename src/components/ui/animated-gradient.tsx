"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: string;
  className?: string;
}

export function AnimatedGradient({
  colors,
  speed = 5,
  blur = "heavy",
  className,
}: AnimatedGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const dimensions = useDimensions(containerRef);

  const blurMap: Record<string, string> = {
    light: "blur-[50px]",
    medium: "blur-[80px]",
    heavy: "blur-[120px]",
  };

  const circleSize = Math.max(dimensions.width, dimensions.height) * 0.45;

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {colors.map((color, index) => {
        const angle = (index / colors.length) * Math.PI * 2;
        const xOffset = Math.cos(angle) * (dimensions.width * 0.25);
        const yOffset = Math.sin(angle) * (dimensions.height * 0.25);

        return (
          <motion.div
            key={index}
            className={cn("absolute rounded-full opacity-60", blurMap[blur] || blurMap.heavy)}
            style={{
              background: color,
              width: circleSize,
              height: circleSize,
              left: dimensions.width / 2 - circleSize / 2,
              top: dimensions.height / 2 - circleSize / 2,
            }}
            animate={{
              x: [xOffset, -xOffset, xOffset],
              y: [yOffset, -yOffset, yOffset],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * (speed / colors.length),
            }}
          />
        );
      })}
    </div>
  );
}
