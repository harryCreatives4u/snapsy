import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "../../Components/UI/Header";
import Homepage from "../Pages/Homepage";
import Messenger from "../Pages/Messenger";
import UserProfile from "../Pages/UserProfile";
import AuthPage from "../Pages/AuthPage";

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
              <Route path="/profile/:user">
                <UserProfile />
              </Route>
              <Route path="/my-profile/">
                <UserProfile defaultUser={props.user} />
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
