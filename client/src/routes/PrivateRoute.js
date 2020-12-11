import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Component {...rest} />;
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
