export function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    value === "X" ? setValue(null) : setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}