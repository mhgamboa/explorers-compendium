"use client";
import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-5xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 md:text-4xl lg:text-5xl lg:leading-snug dark:text-white "
      >
        The easiest way to manage 5e combat.
        <br />
        <Highlight className="text-black dark:text-white">Ever.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
