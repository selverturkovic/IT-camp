// napraviti user context koji ima pocetnu vrednost za objekat
// dodati usercontext.provider unutar ove komponente
// obaviti njime decu ove komponente props props.children
// napraviti userState koji saljete preko contexta

import { createContext, useEffect, useState } from "react";

//rfce
export const UserContext = createContext({});

function UserContextProvider(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!user) {
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
