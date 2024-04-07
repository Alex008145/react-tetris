import "./Tetris.css";

import Board from "./Board";
import GameStats from "./GameStats";

import { useBoard } from "../hooks/useBoard";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={GameStats} />
    </div>
  );

  return;
};

export default Tetris;
