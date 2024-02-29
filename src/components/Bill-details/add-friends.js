import { useState } from "react";

export default function AddFriend({ addFriend }) {
  const [name, setName] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (name === "") return;
    const nameData = { name: name, id: Date.now() };
    addFriend(nameData);
  }

  return (
    <div className="col-6">
      <h2>Add Friends</h2>

      <form onSubmit={onSubmit} className="mx-3">
        <div className="form-group">
          <label className="form-label">Friend Name</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="btn btn-primary mt-1" type="submit">
            Add Friend
          </button>
        </div>
      </form>
    </div>
  );
}
