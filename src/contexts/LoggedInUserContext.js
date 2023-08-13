import {createContext} from "react";

const LoggedInUserContext = createContext([false, () => {}]);

export default LoggedInUserContext;
