import { useBoardContext } from "../contexts/BoardContext";
import { Button } from "./interactive/Button";

export const ButtonSection = (props) => {
  const { setPlaying, toggleConfigsMenu } = props;
  const { state, dispatch } = useBoardContext();

  const play = () => {
    if (state.found) restart();
    setPlaying(true);
  };

  const pause = () => {
    setPlaying(false);
  };

  const restart = () => {
    setPlaying(false);

    const getRandomPos = () => Math.floor(Math.random() * state.boardSize);

    let bunnyPos = state.bunnyInitialPosition;
    let playerPos = state.playerInitialPosition;

    if(bunnyPos === -1) bunnyPos = getRandomPos()
    if(playerPos === -1) playerPos = getRandomPos()

    dispatch({
      bunnyPosition: bunnyPos,
      playerPosition: playerPos,
      found: false,
      rounds: 0,
    });
  };

  return (
    <div className="flex flex-wrap justify-center mb-2 text-base font-semibold">
      <Button onClick={play} label="Play" />
      <Button onClick={pause} label="Pause" />
      <Button onClick={restart} label="Restart" />
      <Button onClick={toggleConfigsMenu} label="Configs" />
    </div>
  );
};
