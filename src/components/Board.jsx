import { Controls } from "./Controls";
import { Debug } from "./Debug";
import { Tiles } from "./Tiles";
import { Title } from "./Title";

export const Board = () => {
  return (
    <div className="flex flex-col flex-wrap items-center m-6 text-2xl font-fuzzy">
      <Title />
      <Debug />
      <Controls />
      <Tiles/>
    </div>
  );
};
