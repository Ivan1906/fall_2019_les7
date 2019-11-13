import { types } from "mobx-state-tree";

export const Todo = types
  .model("Todo", {
    id: types.identifier,
    title: types.string,
    group: types.maybeNull(types.string),
    completed: types.optional(types.boolean, false),
    favorited: types.optional(types.boolean, false)
  })
  .actions(self => ({
    changeCompleted() {
      self.completed = !self.completed;
    },
    changeFavorited() {
      self.favorited = !self.favorited;
    }
  }));
