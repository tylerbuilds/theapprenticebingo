'use client';

import * as React from "react";
import { useGameStore } from "@/lib/store/game-store";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import type { GameMode } from "@/lib/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GameModeSelector() {
  const setGameMode = useGameStore(state => state.setGameMode);
  const setTargetNumber = useGameStore(state => state.setTargetNumber);
  const resetGame = useGameStore(state => state.resetGame);
  const gameMode = useGameStore(state => state.gameMode);
  const targetNumber = useGameStore(state => state.targetNumber);
  const isHost = useGameStore(state => state.isHost);
  const [showConfirmation, setShowConfirmation] = React.useState<{mode: GameMode, target?: number} | null>(null);

  if (!isHost) return null;
  
  const handleGameModeChange = (mode: GameMode) => {
    setShowConfirmation({mode});
  };
  
  const handleTargetNumberChange = (num: number) => {
    setShowConfirmation({mode: 'number', target: num});
  };
  
  const confirmChange = () => {
    if (showConfirmation) {
      setGameMode(showConfirmation.mode);
      if (showConfirmation.mode === 'number' && showConfirmation.target) {
        setTargetNumber(showConfirmation.target);
      }
      resetGame(); // Reset the bingo card
      setShowConfirmation(null);
    }
  };
  
  const cancelChange = () => {
    setShowConfirmation(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white">Game Mode</CardTitle>
        <CardDescription className="text-gray-300">
          Select how players can win the game
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          <Button
            variant="outline"
            onClick={() => handleGameModeChange('line')}
            className={gameMode === 'line'
              ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700'
              : 'text-white border-gray-400 hover:bg-gray-700 hover:border-gray-300'
            }
          >
            Line
            <span className={`ml-2 text-xs ${gameMode === 'line' ? 'text-amber-100' : 'text-gray-400'}`}>
              (row/col/diag)
            </span>
          </Button>

          <Button
            variant="outline"
            onClick={() => handleGameModeChange('full_house')}
            className={gameMode === 'full_house'
              ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700'
              : 'text-white border-gray-400 hover:bg-gray-700 hover:border-gray-300'
            }
          >
            Full House
            <span className={`ml-2 text-xs ${gameMode === 'full_house' ? 'text-amber-100' : 'text-gray-400'}`}>
              (all 9)
            </span>
          </Button>

          <Button
            variant="outline"
            onClick={() => handleGameModeChange('number')}
            className={gameMode === 'number'
              ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700'
              : 'text-white border-gray-400 hover:bg-gray-700 hover:border-gray-300'
            }
          >
            Number
            <span className={`ml-2 text-xs ${gameMode === 'number' ? 'text-amber-100' : 'text-gray-400'}`}>
              ({targetNumber} squares)
            </span>
          </Button>
        </div>
        
        {/* Mode explanation */}
        <div className="p-3 border rounded-md bg-gray-900/50 border-gray-700">
          <p className="text-sm text-gray-200 mb-2 font-medium">Mode description:</p>
          {gameMode === 'line' && (
            <p className="text-xs text-gray-300">
              Wins are recorded when you complete any row, column, or diagonal line.
            </p>
          )}
          {gameMode === 'full_house' && (
            <p className="text-xs text-gray-300">
              Win only when all 9 squares are marked. No partial wins are recorded.
            </p>
          )}
          {gameMode === 'number' && (
            <p className="text-xs text-gray-300">
              Win when you mark exactly {targetNumber} squares, regardless of position.
            </p>
          )}
        </div>

        {gameMode === 'number' && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Target Number of Squares</label>
            <div className="grid grid-cols-4 gap-2">
              {[3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Button
                  key={num}
                  variant="outline"
                  onClick={() => handleTargetNumberChange(num)}
                  size="sm"
                  className={targetNumber === num
                    ? 'bg-amber-600 text-white border-amber-600 hover:bg-amber-700'
                    : 'text-white border-gray-400 hover:bg-gray-700 hover:border-gray-300'
                  }
                >
                  {num}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        {/* Confirmation Dialog */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-4 bg-amber-900/90 border border-amber-500 rounded-md text-white relative z-50"
            >
              <p className="mb-3 font-medium text-sm">This will reset your current bingo card. Do you want to continue?</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  onClick={confirmChange}
                  className="bg-amber-600 hover:bg-amber-700 text-white border-0 flex-1 min-w-[120px]"
                >
                  Yes, continue
                </Button>
                <Button
                  size="sm"
                  onClick={cancelChange}
                  className="bg-transparent hover:bg-amber-800 text-white border border-amber-400 flex-1 min-w-[120px]"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
} 