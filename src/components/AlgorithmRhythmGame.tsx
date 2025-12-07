import { useState, useEffect, useCallback } from "react";

const TILE_COLORS = [
  "340 70% 55%",   // Pink
  "280 65% 60%",   // Purple
  "200 80% 55%",   // Blue
  "160 60% 45%",   // Teal
  "45 90% 55%",    // Yellow
  "15 80% 55%",    // Orange
  "260 70% 60%",   // Violet
  "180 60% 50%",   // Cyan
  "320 70% 55%",   // Magenta
];

type GameState = "idle" | "showing" | "playing" | "gameover";

export const AlgorithmRhythmGame = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem("algorithmRhythmBest");
    return saved ? parseInt(saved) : 0;
  });
  const [gameState, setGameState] = useState<GameState>("idle");
  const [activeTile, setActiveTile] = useState<number | null>(null);
  const [message, setMessage] = useState("TAP TO START");

  const addToSequence = useCallback(() => {
    const newTile = Math.floor(Math.random() * 9);
    setSequence((prev) => [...prev, newTile]);
  }, []);

  const showSequence = useCallback(async () => {
    setGameState("showing");
    setMessage("WATCH THE SEQUENCE...");
    
    await new Promise((r) => setTimeout(r, 500));
    
    for (let i = 0; i < sequence.length; i++) {
      setActiveTile(sequence[i]);
      await new Promise((r) => setTimeout(r, 400));
      setActiveTile(null);
      await new Promise((r) => setTimeout(r, 200));
    }
    
    setGameState("playing");
    setMessage("YOUR TURN...");
    setPlayerIndex(0);
  }, [sequence]);

  const startGame = () => {
    setSequence([]);
    setScore(0);
    setPlayerIndex(0);
    setGameState("idle");
    
    // Add first tile and start
    const firstTile = Math.floor(Math.random() * 9);
    setSequence([firstTile]);
  };

  const handleTileClick = (index: number) => {
    if (gameState !== "playing") {
      if (gameState === "idle" || gameState === "gameover") {
        startGame();
      }
      return;
    }

    setActiveTile(index);
    setTimeout(() => setActiveTile(null), 150);

    if (sequence[playerIndex] === index) {
      // Correct!
      if (playerIndex === sequence.length - 1) {
        // Completed sequence
        const newScore = score + 1;
        setScore(newScore);
        
        if (newScore > bestScore) {
          setBestScore(newScore);
          localStorage.setItem("algorithmRhythmBest", newScore.toString());
        }
        
        setMessage("CORRECT! NEXT ROUND...");
        setGameState("idle");
        
        setTimeout(() => {
          addToSequence();
        }, 800);
      } else {
        setPlayerIndex((prev) => prev + 1);
      }
    } else {
      // Wrong!
      setGameState("gameover");
      setMessage("GAME OVER! TAP TO RESTART");
    }
  };

  useEffect(() => {
    if (sequence.length > 0 && gameState === "idle") {
      const timer = setTimeout(() => {
        showSequence();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [sequence, gameState, showSequence]);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2 tracking-tight">
            Algorithm Rhythm
          </h2>
          <p className="text-foreground/50 text-sm">
            Repeat the pattern to score points
          </p>
        </div>

        {/* Score Display */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-1">
              Score
            </div>
            <div className="text-3xl font-black text-foreground">{score}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-foreground/40 mb-1">
              Best
            </div>
            <div className="text-3xl font-black text-primary">{bestScore}</div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <span 
            className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              gameState === "gameover" 
                ? "bg-red-500/20 text-red-400" 
                : gameState === "playing"
                ? "bg-green-500/20 text-green-400"
                : "bg-foreground/10 text-foreground/60"
            }`}
          >
            {message}
          </span>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
          {[...Array(9)].map((_, index) => {
            const isActive = activeTile === index;
            const color = TILE_COLORS[index];
            
            return (
              <button
                key={index}
                onClick={() => handleTileClick(index)}
                disabled={gameState === "showing"}
                className={`
                  aspect-square rounded-xl transition-all duration-150 cursor-pointer
                  border border-white/10
                  ${gameState === "showing" ? "cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"}
                `}
                style={{
                  backgroundColor: isActive 
                    ? `hsl(${color})` 
                    : `hsl(${color} / 0.15)`,
                  boxShadow: isActive 
                    ? `0 0 30px hsl(${color} / 0.6), inset 0 0 20px hsl(${color} / 0.3)` 
                    : `inset 0 1px 0 rgba(255,255,255,0.05)`,
                  transform: isActive ? "scale(1.05)" : undefined,
                }}
              />
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-foreground/30 text-xs">
          {gameState === "idle" && sequence.length === 0 && (
            <span>Tap any tile to start the game</span>
          )}
          {gameState === "gameover" && (
            <span>You reached level {score}! Tap to try again.</span>
          )}
        </div>
      </div>
    </section>
  );
};
