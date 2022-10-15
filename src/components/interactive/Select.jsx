export const Select = (props) => {
  const { options, onSelect, label, selected } = props;

  return (
    <div className="flex flex-col w-2/5">
      <label className="text-lg">{label}</label>
      <select
        onChange={onSelect}
        className="w-full mb-2 bg-white p-2 border border-black border-solid text-base"
        defaultValue={selected}
      >
        {options.map((opt) => {
          return (
            <option
              onMouseOver={() => console.log(opt)}
              value={opt.value}
              key={opt.label}
            >
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
