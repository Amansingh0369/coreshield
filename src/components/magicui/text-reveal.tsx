"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
  showProgressLine?: boolean;
}

export const TextReveal: FC<TextRevealProps> = ({
  text,
  className,
  showProgressLine = true,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["20% center", "80% center"], // Extended scroll range
  });

  // Map scroll progress to desired values
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Split text into words
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 min-h-[60vh]", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start px-6 py-16">
        {/* Word-by-Word Reveal Effect */}
        <motion.p className="text-center text-white text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-7xl">
          {words.map((word, index) => {
            // Calculate delay for each word
            const delay = index * 0.1;
            // Opacity transition: 0 to 1 between 0% and 50% scroll
            const wordOpacity = useTransform(
              scrollYProgress,
              [0.02, 0.5],
              [0, 1]
            );
            // Y-axis transition: 10px to 0px between 20% and 60% scroll
            const wordY = useTransform(scrollYProgress, [0.2, 0.6], ["10px", "0px"]);

            return (
              <motion.span
                key={index}
                style={{ opacity: wordOpacity, y: wordY }}
                className="inline-block mr-2"
                transition={{ ease: "easeOut", delay }} // Apply delay for cascading effect
              >
                {word}
              </motion.span>
            );
          })}
        </motion.p>

        {/* Progress Line (Optional) */}
        {showProgressLine && (
          <div className="relative h-[20vh] w-[1px] mt-16">
            {/* Progress Line */}
            <motion.div
              className="w-full bg-gradient-to-b from-white/80 to-blue-300 rounded-full"
              style={{
                height: progressHeight,
                opacity: progressOpacity,
                transformOrigin: "top",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
