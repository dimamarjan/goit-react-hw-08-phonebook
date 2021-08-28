import { Switch } from "react-router-dom";

import PrivateRoute from "components/Rutes/PrivatRoute";
import PublicRoute from "components/Rutes/PublicRoute";

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { NavBar } from "components/NavBar/NavBar";
import { LoginForm } from "components/LoginForm/LoginForm";
import { RegistrationForm } from "components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path="/contacts">
          <ContactForm />
          <Filter />
          <ContactList />
        </PrivateRoute>

        <PublicRoute exact path="/login" restricted>
          <LoginForm />
        </PublicRoute>
        <PublicRoute exact path="/registration" restricted>
          <RegistrationForm />
        </PublicRoute>
      </Switch>
    </>
  );
}

export default App;
