import { useState, useEffect } from "react";
import { useBoardContext } from "../contexts/BoardContext";
import { algorithmsList } from "./algorithms";

export const gameplayLoop = (props) => {
  const { playingHooks } = props
  const [playing, setPlaying] = playingHooks
  const { state, dispatch } = useBoardContext()
  const [loop, setLoop] = useState(0)

  useEffect(() => {
    if (playing) {
      setTimeout(() => {
        if (state.bunnyPosition === state.playerPosition) {
          const savedMatch = { ...state }
          delete savedMatch.history

          setPlaying(false);
          dispatch({
            found: true,
            match: state.match + 1,
            history: [...state.history, savedMatch]
          });
          return;
        }

        const bunnyAlgorithm = algorithmsList[state.bunnyAlgorithm].function
        const playerAlgorithm = algorithmsList[state.playerAlgorithm].function

        const bunnyState = {
          ...state,
          initialPosition: state.bunnyInitialPosition,
          position: state.bunnyPosition
        }
        const playerState = {
          ...state,
          initialPosition: state.playerInitialPosition,
          position: state.playerPosition
        }

        dispatch({
          rounds: state.rounds + 1,
          bunnyPosition: bunnyAlgorithm(state.bunnyPosition, bunnyState),
          playerPosition: playerAlgorithm(state.playerPosition, playerState),
        });
        setLoop(loop + 1);
      }, state.delay);
    }
  }, [loop, playing])
}