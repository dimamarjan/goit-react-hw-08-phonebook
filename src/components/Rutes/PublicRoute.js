import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "redux/slices/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isloggedStatus = useSelector(authSelectors.loggedStatus);
  const shouldRedirect = isloggedStatus && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
