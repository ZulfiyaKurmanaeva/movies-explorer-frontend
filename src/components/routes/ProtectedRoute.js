import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {
  return loggedIn === undefined ? <></> : (loggedIn ? <>{children}</> : <Navigate to='/' />);
}

export default ProtectedRoute;