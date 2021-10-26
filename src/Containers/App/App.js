import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "../../Components/UI/Header/Header";
import Homepage from "../Homepage/Homepage";
import Messenger from "../Messenger/Messenger";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full debug-screens ">
      <Header />
      <div className="container relative flex justify-between pt-20 mx-auto max-w-workspace lg:w-11/12 xl:w-4/5 2xl:w-10/12">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/chats">
            <Messenger />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
