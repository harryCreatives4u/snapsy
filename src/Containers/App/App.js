import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "../../Components/UI/Header/Header";
import Homepage from "../Homepage/Homepage";
import Messenger from "../Messenger/Messenger";
import UserProfile from "../UserProfile/UserProfile";
import AuthPage from "../AuthPage/AuthPage";

function App(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full debug-screens ">
      {props.auth ? (
        <>
          <Header />
          <div className="container relative flex justify-between pt-20 mx-auto max-w-workspace lg:w-11/12 xl:w-4/5 2xl:w-10/12">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/chats">
                <Messenger />
              </Route>
              <Route path="/profile">
                <UserProfile />
              </Route>
            </Switch>
          </div>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.isAuth,
  };
};

export default connect(mapStateToProps)(App);
