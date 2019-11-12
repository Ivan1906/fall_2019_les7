import { types, getParent } from "mobx-state-tree";

export const Todo = types
  .model("Todo", {
    id: types.identifier,
    title: types.string,
    group: types.maybeNull(types.string),
    completed: types.optional(types.boolean, false),
    favorited: types.optional(types.boolean, false)
  })
  .actions(self => ({
    editText(text) {
      self.title = text;
    },
    changeCompleted() {
      self.completed = !self.completed;
    },
    changeFavorited() {
      self.favorited = !self.favorited;
    },
    remove() {
      getParent(self, 2).remove(self);
    }
  }));
