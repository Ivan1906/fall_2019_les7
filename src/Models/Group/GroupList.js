import uuid from "uuid/v4";
import { types, getRoot } from "mobx-state-tree";
import { Group } from "./Group";
import { paths } from "../../routers/routers";

export const GroupList = types
  .model("GroupList", {
    list: types.optional(types.array(Group), [])
  })
  .actions(self => ({
    add(name) {
      const group = Group.create({ id: uuid(), name });
      self.list.push(group);
      getRoot(self).routers.addRouteGroup(
        group.name,
        paths.groupById.replace(":id", group.id)
      );
    },
    clear() {
      self.list.clear();
    }
  }));
