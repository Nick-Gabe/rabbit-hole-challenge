import { useBoardContext } from "../contexts/BoardContext";
import { algorithmsList } from "../gameplay/algorithms";
import { Input } from "./interactive/Input";
import { Select } from "./interactive/Select";

export const ConfigsMenu = () => {
  const { state, dispatch } = useBoardContext();
  const algorithms = Object.values(algorithmsList);

  const validatePosition = (position) => {
    if (position >= state.boardSize) position = state.boardSize - 1;
    else if (position < 0) position = 0;

    return position;
  };

  return (
    <>
      <div className="flex justify-center flex-wrap text-base">
        <Input
          type="number"
          label="Delay (ms)"
          value={state.delay}
          onChange={(event) => {
            let value = Number(event.target.value);

            if (value < 100) value = 100;

            dispatch({
              delay: value,
            });
          }}
        />
        <Input
          type="number"
          label="Board size"
          value={state.boardSize}
          onChange={(event) => {
            const value = Number(event.target.value);

            if (value <= 2) return (event.target.value = 2);

            let {
              bunnyPosition,
              playerPosition,
              bunnyInitialPosition,
              playerInitialPosition,
            } = state;

            if (bunnyPosition >= value) bunnyPosition = value - 1;
            if (bunnyInitialPosition >= value) bunnyInitialPosition = value - 1;
            if (playerPosition >= value) playerPosition = value - 1;
            if (playerInitialPosition >= value)
              playerInitialPosition = value - 1;

            dispatch({
              boardSize: value,
              bunnyPosition,
              playerPosition,
              bunnyInitialPosition,
              playerInitialPosition,
            });
          }}
        />
        <Input
          type="number"
          label="Player Initial Pos."
          value={state.playerInitialPosition}
          onChange={(event) => {
            let value = Number(event.target.value);
            value = validatePosition(value);

            dispatch({
              playerInitialPosition: value,
            });
          }}
        />
        <Input
          type="number"
          label="Bunny Initial Pos."
          value={state.bunnyInitialPosition}
          onChange={(event) => {
            let value = Number(event.target.value);
            value = validatePosition(value);

            dispatch({
              bunnyInitialPosition: value,
            });
          }}
        />
      </div>
      <div className="w-full flex justify-evenly mt-2 flex-wrap text-base">
        <Select
          onSelect={(event) => {
            dispatch({
              playerAlgorithm: event.target.value,
            });
          }}
          label="Player Algorithm"
          selected={state.playerAlgorithm}
          options={algorithms}
        />
        <Select
          onSelect={(event) => {
            dispatch({
              bunnyAlgorithm: event.target.value,
            });
          }}
          label="Bunny Algorithm"
          selected={state.bunnyAlgorithm}
          options={algorithms}
        />
      </div>
    </>
  );
};
