export const Input = (props) => {
  return (
    <div className="flex flex-col mx-2">
      <label className="text-lg">{props.label}</label>
      <input
        type={props.type}
        className="bg-white px-2 border-solid border-black border w-40"
        placeholder={props.placeholder || props.label}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};
