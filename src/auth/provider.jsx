import React from "react";
import authCtx from './context';
import Cookies from 'js-cookie';

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(Cookies.get('user') ?? null);

  const signIn = async (username, password) => {
    try {
      const res = await fetch('http://localhost:5002/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          email: username, password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async res => {
          if (!res.ok) {
            throw await res.json();
          }

          return res.json();
        });
      
      Cookies.set('user', JSON.stringify(res.data), {
        expires: 365, sameSite: 'lax'
      });
      
      setUser(res.data);

      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authCtx.Provider value={{
      user, signIn
    }}>
      {children}
    </authCtx.Provider>
  );
}

export default AuthProvider;
