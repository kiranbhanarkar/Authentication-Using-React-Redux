import "./App.css";
import { Provider } from "react-redux"
import store from './redux/store'
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from './components/RegistrationForm/index'
import Profile from "./components/RegistrationForm/Profile";
import NavbarComponent from "./components/RegistrationForm/NavbarComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="app">
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <RegistrationForm />
          </Route>
          <Route path="/Profile">
             <Profile />
          </Route>
        
        </Switch>
      </BrowserRouter>
    </Provider>
    </div>
  );
};


export default App;
