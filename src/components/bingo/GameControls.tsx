'use client';

import * as React from "react";
import { useGameStore } from "@/lib/store/game-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomOptions } from "@/lib/data";
import { useSounds } from "@/lib/sounds";
import { motion } from "framer-motion";
import { FiRefreshCw, FiGrid, FiPower } from "react-icons/fi";

export function GameControls() {
  const isHost = useGameStore(state => state.isHost);
  const isSinglePlayer = useGameStore(state => state.isSinglePlayer);
  const resetGame = useGameStore(state => state.resetGame);
  const resetMarks = useGameStore(state => state.resetMarks);
  const regenerateCard = useGameStore(state => state.regenerateCard);
  const setGrid = useGameStore(state => state.setGrid);
  const { playClick } = useSounds();
  
  const [currentSeed, setCurrentSeed] = React.useState<string>(() => {
    // Generate a random seed when the component mounts
    return Date.now().toString(36);
  });
  
  const [seedInput, setSeedInput] = React.useState<string>("");

  const exitGame = () => {
    playClick();
    // Use resetGame instead of just reloading the page
    resetGame();
    // This will properly reset the game and redirect to home
  };

  const handleResetMarks = () => {
    playClick();
    // Only reset marks without regenerating card
    resetMarks();
  };

  const handleNewCard = () => {
    playClick();
    // Generate new random seed
    const newSeed = Date.now().toString(36);
    setCurrentSeed(newSeed);
    // Generate new card with the new seed
    regenerateCard(newSeed);
  };
  
  const handleLoadSeed = () => {
    if (seedInput.trim()) {
      playClick();
      const normalizedSeed = seedInput.trim();
      setCurrentSeed(normalizedSeed);
      regenerateCard(normalizedSeed);
    }
  };
  
  const handleSeedKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && seedInput.trim()) {
      handleLoadSeed();
    }
  };
  
  return (
    <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 overflow-hidden relative h-full flex flex-col">
      {/* Subtle boardroom pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 pointer-events-none"></div>

      <CardContent className="p-2 sm:p-3 md:p-4 relative z-10 flex-1 flex flex-col justify-between">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {/* Reset marks button - available to all */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="default"
                onClick={handleResetMarks}
                style={{ backgroundColor: 'black', color: 'white' }}
                className="w-full hover:bg-gray-800 text-white border-gray-700 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium h-auto min-h-[44px] sm:min-h-[48px]"
              >
                <FiRefreshCw className="text-white" />
                <span>Reset Marks</span>
              </Button>
            </motion.div>

            {/* New Card button - only for host or single player */}
            {(isHost || isSinglePlayer) && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleNewCard}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-medium h-auto min-h-[44px] sm:min-h-[48px]"
                >
                  <FiGrid className="text-green-200" />
                  <span>New Card</span>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Seed input and load button */}
          {(isHost || isSinglePlayer) && (
            <div className="p-2 sm:p-3 bg-gray-900/50 rounded-md border border-gray-700">
              <div className="text-xs text-gray-400 mb-1 sm:mb-2">Card Seed</div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={seedInput}
                  onChange={(e) => setSeedInput(e.target.value)}
                  onKeyDown={handleSeedKeyDown}
                  placeholder={currentSeed}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-200 min-h-[40px]"
                />
                <Button
                  onClick={handleLoadSeed}
                  variant="secondary"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium min-h-[40px] px-4 sm:px-6"
                  disabled={!seedInput.trim()}
                >
                  Load
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-1 truncate">{currentSeed.length > 20 ? `Current seed: ${currentSeed.substring(0, 20)}...` : `Current seed: ${currentSeed}`}</div>
            </div>
          )}
        </div>

        {/* Exit Game button - always at bottom */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 sm:mt-3">
          <Button
            variant="destructive"
            onClick={exitGame}
            className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-medium h-auto min-h-[44px] sm:min-h-[48px]"
          >
            <FiPower />
            <span>Exit Game</span>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
} 