import { useReducer, useState } from "react";
import { gameplayLoop } from "../gameplay/loop";
import { ButtonSection } from "./ButtonSection";
import { ConfigsMenu } from "./ConfigsMenu";

export const Controls = () => {
  const [playing, setPlaying] = useState(null);
  const [configsMenu, toggleConfigsMenu] = useReducer((state) => !state, false);

  gameplayLoop({
    playingHooks: [playing, setPlaying],
  });

  return (
    <div className="my-5 flex flex-col justify-center items-center">
      <ButtonSection
        toggleConfigsMenu={toggleConfigsMenu}
        setPlaying={setPlaying}
      />
      {configsMenu && <ConfigsMenu />}
    </div>
  );
};
