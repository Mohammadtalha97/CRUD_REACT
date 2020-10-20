import React, { useState } from "react";
import uuid from "react-uuid";

function ArrayComponent() {
  const [item, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setItemName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setItems([
      ...item,
      {
        id: uuid(),
        name: itemName,
      },
    ]);
    setItemName("");
  };

  return (
    <div>
      <form>
        <label>
          <input type="text" value={itemName} onChange={onChangeHandler} />
          <button onClick={onSubmitHandler}>Click</button>
        </label>
      </form>
      <ul>
        {item.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayComponent;
