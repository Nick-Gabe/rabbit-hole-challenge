import { useBoardContext } from "../contexts/BoardContext";

export const Title = () => {
  const { state } = useBoardContext();

  return (
    <div className=" pb-2 border-b border-black">
      <h1 className="text-center font-bold">Rabbit in the Hole</h1>
      <p className="text-center">Rounds: {state.rounds}</p>
    </div>
  );
};
