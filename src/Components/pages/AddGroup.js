import React from "react";
import { store } from "../../Models/RootModel";
import { addRouter } from "../../routers/routers";

const AddGroup = () => {
  const submitHandle = e => {
    e.preventDefault();
    let name = e.target.nameGroup.value;
    if (Boolean(name)) {
      store.groups.add(name);
      //addRouter();
    }
    e.target.nameGroup.value = "";
  };

  return (
    <form onSubmit={submitHandle}>
      <h1>Add group</h1>
      <label>Group name:</label>
      <input type="text" name="nameGroup" placeholder="Enter name group" />
      <input type="submit" value="Add group" />
    </form>
  );
};

export default AddGroup;
