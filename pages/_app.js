import "../styles/globals.css";
import cartContext, { UserContext } from "../AppContext";
import { useReducer, useState } from "react";
import reducer from "../src/reducer/reducer";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, []);
  const [user, setUser] = useState({});
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </cartContext.Provider>
  );
}
