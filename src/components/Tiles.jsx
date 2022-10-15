import { useBoardContext } from "../contexts/BoardContext";
import { Hole } from "./Emojis/Hole";
import { Player } from "./Emojis/Player";
import { Bunny } from "./Emojis/Bunny";
import { BunnyFound } from "./Emojis/BunnyFound";

export const Tiles = () => {
  const { state } = useBoardContext();

  const emptyArray = new Array(state.boardSize).fill(null);

  return (
    <div className="flex flex-wrap md:text-4xl max-w-lg">
      {emptyArray.map((x, i) => {
        const tiles = {
          [state.bunnyPosition]: Bunny,
          [state.playerPosition]: Player,
          default: Hole,
        };

        const CurrentTile = tiles[i] || tiles.default;

        if (state.found && state.playerPosition === i)
          return <BunnyFound key={i} />;
        return <CurrentTile key={i} />;
      })}
    </div>
  );
};
