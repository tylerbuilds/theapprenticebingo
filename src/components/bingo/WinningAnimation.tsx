'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSounds } from '@/lib/sounds';
import confetti from 'canvas-confetti';

import Image from "next/image";

interface WinningAnimationProps {
  isVisible: boolean;
  onClose: () => void;
}

export function WinningAnimation({ isVisible, onClose }: WinningAnimationProps) {
  const { playBingo } = useSounds();
  const [phrase, setPhrase] = React.useState('');
  
  const winningPhrases = [
    "BINGO CHAMPION!",
    "ABSOLUTELY BRILLIANT!",
    "TASK COMPLETED!",
    "WINNER WINNER!",
    "BOARDROOM MASTER!",
    "PROJECT MANAGER MATERIAL!",
    "CEO MATERIAL!",
    "BUSINESS SUPERSTAR!",
    "APPRENTICE STAR!",
    "DEAL MAKER!",
    "BUSINESS GENIUS!",
    "PERFECT STRATEGY!"
  ];
  
  // Play sound and trigger confetti when animation becomes visible
  React.useEffect(() => {
    if (isVisible) {
      // Play sound
      playBingo();
      
      // Set random phrase
      setPhrase(winningPhrases[Math.floor(Math.random() * winningPhrases.length)]);
      
      // Trigger confetti explosion
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Create confetti bursts from different angles
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
      
      // Automatically close after 6 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isVisible, onClose, playBingo]);
  
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background with radial gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-amber-500/60 to-amber-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ willChange: 'opacity' }}
          />

          {/* Main content */}
          <motion.div
            className="relative z-10 max-w-4xl w-full mx-4 flex flex-col items-center justify-center"
            initial={{ scale: 0.5, y: 100 }}
            animate={{
              scale: 1,
              y: 0,
            }}
            exit={{ scale: 0.5, y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100, duration: 0.5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Win Image */}
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-md h-64 sm:h-80 mb-6 drop-shadow-[0_0_35px_rgba(255,215,0,0.6)]"
              style={{ willChange: 'transform, opacity' }}
            >
              <Image
                src="/images/win-2026.png"
                alt="BINGO WIN!"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Main text */}
            <motion.div
              className="bg-gradient-to-r from-amber-600/90 to-yellow-600/90 p-6 sm:p-8 rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.8)] text-center transform backdrop-blur-md border border-yellow-400/30"
              initial={{ scale: 0.9 }}
              animate={{
                scale: [0.9, 1, 0.9],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: 'transform' }}
              >
                {phrase}
              </motion.h2>

              <motion.p
                className="text-xl text-white/90 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ willChange: 'opacity' }}
              >
                You've dominated the boardroom challenge!
              </motion.p>

              {/* Share buttons */}
              <motion.div
                className="mt-6 flex flex-wrap gap-3 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('I just won Apprentice Bingo! Play now at https://apprentice-bingo.tylerbuilds.com')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm border border-gray-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Share on X
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://apprentice-bingo.tylerbuilds.com')}&quote=${encodeURIComponent('I just won Apprentice Bingo!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Share on Facebook
                </a>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Apprentice Bingo',
                        text: 'I just won Apprentice Bingo!',
                        url: 'https://apprentice-bingo.tylerbuilds.com'
                      });
                    } else {
                      // Fallback: copy to clipboard
                      navigator.clipboard.writeText('I just won Apprentice Bingo! Play now at https://apprentice-bingo.tylerbuilds.com');
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </motion.div>
            </motion.div>

            {/* Stars floating around - optimized with fixed positions */}
            {[
              { x: -120, y: -80, emoji: '✨', delay: 0 },
              { x: 120, y: -100, emoji: '⭐', delay: 0.5 },
              { x: -140, y: 60, emoji: '🌟', delay: 1 },
              { x: 140, y: 80, emoji: '✨', delay: 1.5 },
              { x: -80, y: 0, emoji: '⭐', delay: 0.3 },
              { x: 80, y: 0, emoji: '🌟', delay: 0.8 },
              { x: 0, y: -120, emoji: '✨', delay: 1.2 },
              { x: 0, y: 120, emoji: '⭐', delay: 0.7 },
            ].map((star, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl text-yellow-300"
                initial={{ x: star.x, y: star.y, opacity: 0, scale: 0.5 }}
                animate={{
                  y: star.y - 20,
                  opacity: [0, 1, 0.5, 1, 0],
                  scale: [0.5, 1, 0.8, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                {star.emoji}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 