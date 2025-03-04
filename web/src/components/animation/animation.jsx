import { motion } from 'framer-motion';
import React, { useMemo } from 'react';

const FadeInFromLeft = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FadeInFromRight = ({ children, className = '' }) => {
          return (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={className}
            >
              {children}
            </motion.div>
          );
        };

        const FadeInUp = ({ children, className = '' }) => {
          return (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={className}
            >
              {children}
            </motion.div>
          );
        };
        const FadeInDown = ({ children, className = '' }) => {
          return (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={className}
            >
              {children}
            </motion.div>
          );
        };


const MotionWrapperLeftRight = ({
          children,
          initialX = 0,
          initialY = 0,
          duration = 0.8,
          delay = 0,
          opacity = 0,
          className = '',
        }) => {
          return (
            <motion.div
              initial={{ x: initialX, y: initialY, opacity }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration, delay, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={className}
            >
              {children}
            </motion.div>
          );
        };

        const ScaleAnimationInfinite = ({ children, scaleAmount = 1.1, duration = 1.5, className = '' }) => {
          return (
            <motion.div
              className={className}
              animate={{
                scale: [1, scaleAmount, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {children}
            </motion.div>
          );
        };
      
        const ScaleAnimation= ({ children, scaleAmount = 1.1, duration = 1.5, className = '' }) => {
          return (
            <motion.div
              className={className}
              animate={{
                scale: [1, scaleAmount, 1],
              }}
              transition={{
                duration: duration,
                ease: 'easeInOut',
              }}
            >
              {children}
            </motion.div>
          );
        };
      
        
        const RotateAnimationCard = ({
          children,
          rotateAmount = 6,
          duration = 1.5,
          className = '',
          delay = 0,
          repeat = false, // Optional - Infinite rotation repeat feature
        }) => {
          return (
            <motion.div
              className={className}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{
                rotate: rotateAmount,
                opacity: 1,
              }}
              transition={{
                duration: duration,
                ease: 'easeInOut',
                delay: delay,
                repeat: repeat ? Infinity : 0, 
                // repeatType: 'mirror',
              }}
 
            >
              {children}
            </motion.div>
          );
        };
        
       

  
       const AnimatedCard = ({ children, className, variants }) => {
          return (
            <motion.div
              className={className}
              variants={variants}
            >
              {children}
            </motion.div>
          );
        };

        const AnimatedCardList = ({ children, className, containerVariants }) => {
          return (
            <motion.div
              className={className}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {children}
            </motion.div>
          );
        };

        export const ContainerVariants = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        };
        export const cardvarientlefttoright = {
          hidden: { opacity: 0, x: -50 },
          show: { 
            opacity: 1, x: 0, 
            transition: { duration: 0.6, ease: "circOut" } },
        };
        export const cardvarientrighttoleft = {
          hidden: { opacity: 0, x: 50 },
          show: { 
            opacity: 1, x: 0, 
            transition: { duration: 0.6, ease: "circOut" } },
        };
        export const cardvarienttoptobottom = {
          hidden: { opacity: 0, y: 50 },
          show: { 
            opacity: 1, y: 0, 
            transition: { duration: 0.6, ease: "circOut" } },
        };
        export const cardvarientbottomtotop = {
          hidden: { opacity: 0, y: 50 },
          show: { 
            opacity: 1, y: 0, 
            transition: { duration: 0.6, ease: "circOut" } },
        };


export {
          FadeInFromLeft,
          FadeInFromRight,
          FadeInUp,
          FadeInDown,
          ScaleAnimationInfinite,
          MotionWrapperLeftRight,
          AnimatedCard,
          AnimatedCardList,
          // ContainerVariants,
          RotateAnimationCard,
          ScaleAnimation
}