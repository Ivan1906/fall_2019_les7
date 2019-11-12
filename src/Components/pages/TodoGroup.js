import React, { Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";
import ListItem from "../shared/Components/ListItems";
import { store } from "../../Models/RootModel";
import { values } from "mobx";
import { observer } from "mobx-react";
import HeaderItem from "../shared/Components/HeaderItem";

const TodoGroup = () => {
  const { id } = useParams();
  const history = useHistory();

  const group = values(store.groups.list).find(el => el.id === id);

  if (!group) {
    history.push("/");
  }

  const submitHandle = e => {
    e.preventDefault();
    let text = e.target.textTodo.value;
    if (Boolean(text)) {
      store.todos.add(text, group);
    }
    e.target.textTodo.value = "";
  };

  return (
    <div>
      {group ? <h1>{group.name}</h1> : null}
      <hr />
      {store.todos.listTodoByGroupId(group).length !== 0 ? (
        <Fragment>
          <HeaderItem />
          <ListItem items={store.todos.listTodoByGroupId(group)} />
        </Fragment>
      ) : (
        <p>There are no todos for group</p>
      )}

      <hr />
      <form onSubmit={submitHandle}>
        <h3>Add Todo for Group</h3>
        <label>Todo text:</label>
        <input type="text" name="textTodo" placeholder="Enter name group" />
        <input type="submit" value="ADD TODO" />
      </form>
    </div>
  );
};

export default observer(TodoGroup);
