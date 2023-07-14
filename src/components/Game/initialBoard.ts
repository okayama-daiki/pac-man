import type { GameBoard } from "./Game";
// import { Cell } from "./Game";

// TODO: Cells imported from Game do not work properly.
enum Cell {
  Empty,
  Wall,
  Dot,
  PacMan,
  Ghost,
}

const initialGameBoard: GameBoard = [
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
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Ghost,
    Cell.Empty,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
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
    Cell.Ghost,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Empty,
    Cell.Empty,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
  ],
  [
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.Dot,
    Cell.Wall,
    Cell.Dot,
    Cell.PacMan,
    Cell.Dot,
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

export { initialGameBoard };