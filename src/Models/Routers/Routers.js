import { types } from "mobx-state-tree";
import { Route } from "./Route";

export const Routers = types
  .model("Routers", {
    home: Route,
    favorities: Route,
    groupById: types.optional(types.array(Route), []),
    groupAdd: Route
  })
  .actions(self => ({
    addRouteGroup(name, path) {
      self.groupById.push({ name, path });
    }
  }))
  .views(self => ({
    get getRouters() {
      let routers = {
        home: self.home,
        favorities: self.favorities,
        groupById: self.groupById,
        groupAdd: self.groupAdd
      };
      return routers;
    }
  }));
