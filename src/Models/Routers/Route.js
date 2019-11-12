import { types } from "mobx-state-tree";

export const Route = types.model("Route", {
  name: types.string,
  path: types.string
});
