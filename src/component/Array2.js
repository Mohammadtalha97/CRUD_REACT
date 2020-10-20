import React, { useState } from "react";
import uuid from "react-uuid";
import { v4 as uuidv4 } from "uuid";

function Array2() {
  const [useDetails, setUseDetails] = useState([]);

  const [userObj, setuserObj] = useState({
    userId: "",
    userName: "",
    userPassword: "",
  });

  const [editState, setEditState] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();

    setuserObj({
      ...userObj,
      userId: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e, x) => {
    e.preventDefault();

    if (x) {
      setEditState(true);
      setuserObj({
        userId: x.id,
        userName: x.userName,
        userPassword: x.userPassword,
      });

      console.log(userObj);
    } else {
      console.log("for add");
      setUseDetails([...useDetails, userObj]);
    }
  };

  const handleDelete = (id) => {
    const filterData = useDetails.filter((x) => x.userId != id);
    setUseDetails(filterData);
  };

  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={userObj.userName}
          placeholder="Enter Name"
          onChange={onChangeHandler}
        />
        <label>Password</label>
        <input
          type="text"
          name="userPassword"
          value={userObj.userPassword}
          placeholder="Enter Password"
          onChange={onChangeHandler}
        />
        <button onClick={(e) => onSubmit(e)}>
          {editState ? "Edit" : "Add"}
        </button>
      </form>
      <ul style={{ listStyle: "none" }}>
        {useDetails.map((x) => (
          <li key={x.userName}>
            {x.userName}&nbsp;&nbsp;
            <button onClick={(e) => onSubmit(e, x)}>Edit</button>&nbsp;
            <button onClick={() => handleDelete(x.userId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Array2;
