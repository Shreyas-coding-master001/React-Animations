import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./Landing.css";

function HeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background zoom
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.4]
  );

  // Section moves upward
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  // Text appears
  const opacity = useTransform(
    scrollYProgress,
    [0.3, 0.55],
    [0, 1]
  );

  // Text moves upward while appearing
  const textY = useTransform(
    scrollYProgress,
    [0.3, 0.55],
    [50, 0]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="hero"
      style={{ y }}
    >
      {/* Background */}
      <motion.div
        className="hero-bg"
        style={{ scale }}
      />

      {/* Content */}
      <motion.div
        className="hero-content"
        style={{
          opacity,
          y: textY,
        }}
      >
        <h1>Explore Knowledge</h1>

        <p>
          Understand your documents through
          intelligent embeddings.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;