import { types } from "mobx-state-tree";

export const Group = types
  .model("Group", {
    id: types.identifier,
    name: types.string
  })
  .actions(self => ({
    editName(name) {
      self.name = name;
    }
  }));
