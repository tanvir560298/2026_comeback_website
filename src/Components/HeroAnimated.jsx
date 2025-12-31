import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/New Project.png"

const HeroAnimated = () => {
  return (
    <section className="relative overflow-hidden h-130 lg:h-155 rounded-2xl">
      
      {/* MOVING BACKGROUND (video feel) */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: 1.12, x: -40 }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={hero}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-16">
        <div className="max-w-xl text-white">

          {/* LINE 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg tracking-widest font-semibold"
          >
            WE WILL
          </motion.p>

          {/* LINE 2 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-black text-yellow-400 drop-shadow-lg"
          >
            LEARN & LEARN
          </motion.h1>

          {/* LINE 3 */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-2 text-xl font-semibold"
          >
            UNTIL WE ARE
          </motion.p>

          {/* LINE 4 */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.9 }}
            className="text-5xl lg:text-6xl font-black text-yellow-400"
          >
            FINISHED.
          </motion.h2>

        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;
