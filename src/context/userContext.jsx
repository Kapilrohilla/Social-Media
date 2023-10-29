import { createContext } from "react";
import { useReducer } from "react";
import PropTypes from "prop-types";

function loginReducer(_state, action) {
  return action.type === "login";
}

const loginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLogin, loginDispatch] = useReducer(loginReducer, false);

  return (
    <loginContext.Provider value={(isLogin, loginDispatch)}>
      {children}
    </loginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default LoginProvider;
