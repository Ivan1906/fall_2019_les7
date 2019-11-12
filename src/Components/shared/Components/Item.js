import React from "react";
import { observer } from "mobx-react";
import T from "prop-types";

const Item = ({ item }) => (
  <div id={item.id} className="item">
    <input
      type="checkbox"
      onClick={item.changeCompleted}
      defaultChecked={item.completed ? "checked" : ""}
    />

    <span className={item.completed ? "completedTodo" : ""}>{item.title}</span>

    <input
      type="checkbox"
      onClick={item.changeFavorited}
      defaultChecked={item.favorited ? "checked" : ""}
    />
  </div>
);

Item.defaulProps = {
  item: {
    id: "idTodo",
    completed: false,
    favorited: false,
    changeCompleted: () =>
      console.log("The 'changeCompleted' function must be passed!"),
    changeFavorited: () =>
      console.log("The 'changeFavorited' function must be passed!")
  }
};
Item.displayName = "Item";
Item.propTypes = {
  item: T.shape({
    id: T.string.isRequired,
    completed: T.bool.isRequired,
    favorited: T.bool.isRequired,
    changeCompleted: T.func.isRequired,
    changeFavorited: T.func.isRequired
  })
};

export default observer(Item);
