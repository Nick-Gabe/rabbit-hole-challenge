export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-white px-2 border-solid border-black border m-2 hover:bg-gray-300"
    >
      {props.label}
    </button>
  );
};
