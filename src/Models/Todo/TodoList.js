import { types, destroy } from "mobx-state-tree";
import uuid from "uuid/v4";
import { Todo } from "./Todo";

export const TodoList = types
  .model("TodoList", {
    list: types.optional(types.array(Todo), [])
  })
  .actions(self => ({
    add(title, group) {
      self.list.push({ id: uuid(), title, group: group.id });
    },
    remove(todo) {
      destroy(todo);
    }
  }))
  .views(self => ({
    listTodoByGroupId(group) {
      return self.list.filter(todo => todo.group === group.id);
    },
    get listFavorities() {
      return self.list.filter(todo => todo.favorited === true);
    },
    get listCompleties() {
      return self.list.filter(todo => todo.completed === true);
    }
  }));
