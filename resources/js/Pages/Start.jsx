import React, { useState } from "react";

const users = ["Ramesh", "Suresh", "Anish", "Manish"];
const groups = ["Group1", "Group2", "Group3"];

export default function App() {
  const [selectedValue, setSelectedValue] = useState("user");
  return (
    <div className="App">
      User{" "}
      {newFunction()}
      Group{" "}
      <input
        type="radio"
        name="menu"
        value="group"
        checked={selectedValue === "group"}
        onChange={(e) => setSelectedValue(e.target.value)}
      />
      <select>
        {selectedValue === "group"
          ? groups.map((group, id) => <option key={id}>{group}</option>)
          : users.map((user, id) => <option key={id}>{user}</option>)}
      </select>
    </div>
  );

  function newFunction() {
    return <input
      type="radio"
      name="menu"
      value="user"
      onChange={(e) => setSelectedValue(e.target.value)}
      checked={selectedValue === "user"} />;
  }
}
