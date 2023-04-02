import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

function AnimatedComponent({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInAnimation}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponent;