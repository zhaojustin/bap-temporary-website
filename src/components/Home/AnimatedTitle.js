import React from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ text }) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.75em" }}
          key={index}
        >
          <Text
            fontSize={{ base: "4em", md: "5em", xl: "6em" }}
            bgGradient="linear(to-t, rgba(255,255,255,0), 35%, white)"
            bgClip="text"
            fontWeight="bold"
            textTransform="italic"
          >
            {word}
          </Text>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
