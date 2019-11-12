import uuid from "uuid/v4";
import { types } from "mobx-state-tree";
import { Group } from "./Group";

export const GroupList = types
  .model("GroupList", {
    list: types.optional(types.array(Group), [])
  })
  .actions(self => ({
    add(name) {
      self.list.push({ id: uuid(), name });
    },
    clear() {
      self.list.clear();
    }
  }))
  .views(self => ({
    get countGroups() {
      return self.list.length;
    }
  }));
