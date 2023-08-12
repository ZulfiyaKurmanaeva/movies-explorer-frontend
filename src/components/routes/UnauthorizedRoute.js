import { Navigate } from "react-router-dom";

function UnauthorizedRoute({ loggedIn, children }) {
  return loggedIn === false ? <>{children}</> : <Navigate to='/movies'></Navigate>;
}

export default UnauthorizedRoute;