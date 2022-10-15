import { useState } from "react";
import { useBoardContext } from "../contexts/BoardContext";

export const Debug = () => {
  const { state, dispatch } = useBoardContext();
  const [curKey, setCurKey] = useState(0);

  if(!state.debugMode) {
    window.onkeydown = (event) => {
      const word = "ZGVidWc=";
      const atob = window.atob(word);
      const key = event.key;
  
      if (curKey === atob.length - 1) {
        return dispatch({
          debugMode: true,
        });
      }
  
      if (key == atob[curKey]) setCurKey(curKey + 1);
      else setCurKey(0);
    };
  } else window.onkeydown = null

  return state.debugMode ? (
    <div className="fixed top-1 left-1 text-sm font-bold">
      {Object.entries(state).map(([key, value]) => {
        return (
          <p key={key}>
            {key}: {`${value}`}
          </p>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
