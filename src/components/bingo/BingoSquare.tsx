'use client';

import * as React from "react";
import { useGameStore } from "@/lib/store/game-store";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useSounds } from "@/lib/sounds";

interface BingoSquareProps {
  index: number;
  content: string;
  isSelected: boolean;
  isLocked: boolean;
  isWinning?: boolean;
}

export function BingoSquare({ index, content, isSelected, isLocked, isWinning = false }: BingoSquareProps) {
  const toggleSquare = useGameStore(state => state.toggleSquare);
  const row = Math.floor(index / 3);
  const col = index % 3;
  const { playClick } = useSounds();
  const [isClicked, setIsClicked] = React.useState(false);
  const [hasInitialized, setHasInitialized] = React.useState(false);

  // Initialize local state from props
  React.useEffect(() => {
    setIsClicked(isSelected);
    setHasInitialized(true);
    console.log(`BingoSquare ${row},${col} initialized with isSelected=${isSelected}`);
  }, [isSelected, row, col]);

  const handleClick = React.useCallback(() => {
    if (isLocked) return;
    
    console.log(`BingoSquare ${row},${col} clicked, current state: isSelected=${isSelected}, isClicked=${isClicked}`);
    
    // Play sound effect
    playClick();
    
    // Set local state immediately for responsive UI
    setIsClicked(prev => !prev);
    
    // Update global state
    try {
      toggleSquare(row, col);
      console.log(`BingoSquare ${row},${col} toggled successfully`);
    } catch (error) {
      console.error(`Error toggling square ${row},${col}:`, error);
    }
  }, [isLocked, toggleSquare, row, col, playClick, isSelected, isClicked]);

  // Determine if the square should appear selected
  const isActive = isSelected || isClicked;

  return (
    <motion.button
      onClick={handleClick}
      disabled={isLocked}
      whileTap={{ scale: isLocked ? 1 : 0.95 }}
      whileHover={!isLocked ? { scale: 1.03, boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" } : {}}
      animate={{ 
        scale: isWinning ? [1, 1.1, 1] : 1,
        boxShadow: isWinning ? [
          "0 0 0 rgba(212, 175, 55, 0)",
          "0 0 30px rgba(212, 175, 55, 0.9)",
          "0 0 0 rgba(212, 175, 55, 0)"
        ] : isActive ? "0 0 15px rgba(245, 158, 11, 0.6)" : "none",
        borderColor: isActive ? "rgba(245, 158, 11, 0.8)" : "rgba(75, 85, 99, 0.5)"
      }}
      transition={{ 
        duration: isWinning ? 0.8 : 0.2,
        repeat: isWinning ? 3 : 0,
        repeatType: "loop"
      }}
      style={{
        backgroundImage: isActive ? "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.95))" : "url('/images/card-texture-2026.png')",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
      }}
      className={cn(
        "relative w-full aspect-square px-1 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200",
        "flex items-center justify-center border border-gray-600/50",
        "shadow-lg backdrop-blur-md",
        isActive
          ? "text-black font-bold" 
          : "bg-gray-800/90 text-white hover:bg-gray-700/90",
        isLocked && "cursor-not-allowed opacity-70 grayscale",
        isWinning && "z-10 ring-2 ring-yellow-400 ring-offset-2 ring-offset-black"
      )}
      data-selected={isActive}
      data-testid={`bingo-square-${row}-${col}`}
      data-initialized={hasInitialized}
    >
      {/* Content */}
      <div className="text-center px-0.5 flex-1 flex items-center justify-center min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4rem] text-xs sm:text-sm">
        {content}
      </div>
      
      {/* Checkmark overlay */}
      {isActive && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1 right-1 bg-black bg-opacity-60 rounded-full p-0.5 z-10"
        >
          <Check size={10} className="text-white sm:hidden" />
          <Check size={14} className="text-white hidden sm:block" />
        </motion.div>
      )}
    </motion.button>
  );
} 