/**
 * Компонент Game представляет собой основной компонент игры. Он управляет состоянием игры (gameOver) и рендерит соответствующий компонент - Menu или Tetris.
 * При нажатии на кнопку в компоненте Menu, вызывается функция start, которая устанавливает состояние gameOver в false, и переключает рендеринг на компонент Tetris.
 * Компонент Tetris принимает количество строк и столбцов для создания доски, и функцию setGameOver для управления состоянием игры.
 */

import Menu from "./Menu";
import Tetris from "./Tetris";

import { useGameOver } from "../hooks/useGameOver";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => resetGameOver();
  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default Game;
