import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import authOperations from "redux/slices/auth/auth-operations";

import PrivateRoute from "components/Rutes/PrivatRoute";
import PublicRoute from "components/Rutes/PublicRoute";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { NavBar } from "components/NavBar/NavBar";
import { LoginForm } from "components/LoginForm/LoginForm";
import { RegistrationForm } from "components/RegistrationForm/RegistrationForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path="/contacts" redirectTo="/login" >
          <ContactForm />
          <ContactList />
        </PrivateRoute>

        <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
          <LoginForm />
        </PublicRoute>

        <PublicRoute exact path="/registration" redirectTo="/contacts" restricted>
          <RegistrationForm />
        </PublicRoute>
      </Switch>
    </>
  );
}

export default App;
