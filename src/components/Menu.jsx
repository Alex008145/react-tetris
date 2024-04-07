import "./Menu.css";

/**
 * Компонент Menu представляет собой базовый компонент меню.
 * Он принимает функцию onClick, которая будет вызвана при клике на кнопку.
 * Компонент Menu рендерит простую кнопку "Play Tetris", которая при клике вызывает функцию onClick.
 * Компонент Menu используется в компоненте Game для начального экрана игры.
 */
const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play Tetris
      </button>
    </div>
  );
};

export default Menu;
