import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { autorun, values } from "mobx";
import { store } from "./Models/RootModel";
import { paths } from "./routers/routers";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  </BrowserRouter>
);

autorun(() => {
  values(store.groups.list).forEach(group => {
    let count = 0;

    values(store.routers.groupById).forEach(route => {
      if (group.name === route.name) {
        count++;
      }
    });

    if (!Boolean(count)) {
      store.routers.addRouteGroup(
        group.name,
        paths.groupById.replace(":id", group.id)
      );
    }
  });
});

const ObserverApp = observer(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<ObserverApp />, rootElement);
