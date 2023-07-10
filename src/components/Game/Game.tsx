import Board from "../Board/Board";
import styles from "./Game.module.css";

enum Cell {
  Empty,
  Wall,
  Dot,
  PacMan,
  Ghost,
}

type GameBoard = Cell[][];

const gameBoard: GameBoard = [
  [
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.PacMan,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
  ],
];

export default function Game() {
  return (
    <div className={styles.container}>
      <Board board={gameBoard}></Board>
    </div>
  );
}

export type { GameBoard };
export { Cell };