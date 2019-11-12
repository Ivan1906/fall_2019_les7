//import { values, autorun } from "mobx";
//import { store } from "../Models/RootModel";

export const paths = {
  home: "/",
  favorities: "/favorities",
  groupById: "/groups/:id",
  groupAdd: "/groups/add"
};

export const routers = {
  home: {
    name: "Home page",
    path: paths.home
  },
  favorities: {
    name: "Favorities todos",
    path: paths.favorities
  },
  groupById: [],
  groupAdd: {
    name: "Add Group",
    path: paths.groupAdd
  }
};

/*autorun(() => {
  values(store.groups.list).forEach(group => {
    let count = 0;

    routers["groupById"].forEach(route => {
      if (group.name === route.name) {
        count++;
      }
    });

    if (!Boolean(count)) {
      routers["groupById"].push({
        name: group.name,
        path: paths.groupById.replace(":id", group.id)
      });
    }
  });
  //console.log(routers);
});*/
