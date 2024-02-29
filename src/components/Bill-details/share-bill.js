import { useState } from "react";

export default function ShareBill() {
  const options = [
    { value: "1", label: "friend 1" },
    { value: "2", label: "friend 2" },
    { value: "3", label: "friend 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleChange({ target }) {
    setSelectedOption(target.value);
  }

  return (
    <div className="col-6">
      <h2>Share Bill Details</h2>

      <form className="mx-3">
        <div className="form-group">
          <label className="form-label">Select Friend Who paid the bill</label>
          <select
            className="form-control"
            value={selectedOption}
            onChange={(e) => handleChange(e)}
          >
            {options.map(({ value, label }, index) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="from-group">
          <label className="form-label">Bill Amount</label>
          <input type="text" className="form-control" />
        </div>

        <div>
          <button className="btn btn-primary mt-2">Add Bill</button>
        </div>
      </form>
    </div>
  );
}
