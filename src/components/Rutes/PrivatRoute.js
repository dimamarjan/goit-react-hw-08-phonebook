import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "redux/slices/auth/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isloggedStatus = useSelector(authSelectors.loggedStatus);
  return (
    <Route {...routeProps}>
      {isloggedStatus === "loaded" ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
