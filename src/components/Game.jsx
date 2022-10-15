import { Board } from './Board'
import { BoardContextProvider } from '../contexts/BoardContext'

export const Game = () => {
  return (
    <BoardContextProvider>
      <Board/>
    </BoardContextProvider>
  )
}
