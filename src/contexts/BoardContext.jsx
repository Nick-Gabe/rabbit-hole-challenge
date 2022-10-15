import { createContext, useContext, useReducer } from "react";

const initialState = {
  debugMode: false,
  boardSize: 100,
  bunnyInitialPosition: 50,
  bunnyAlgorithm: 'adjacent',
  bunnyPosition: 50,
  playerInitialPosition: 0,
  playerAlgorithm: 'alternate',
  playerPosition: 0,
  rounds: 0,
  found: false,
  delay: 100,
  match: 0,
  history: []
}

const BoardContext = createContext({
  state: initialState, dispatch: () => {}
});

export const useBoardContext = () => useContext(BoardContext);

export const BoardContextProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    return {
      ...state,
      ...action,
    };
  }, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BoardContext.Provider>
  );
};
