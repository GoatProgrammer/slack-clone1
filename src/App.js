import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat';
import Login from './components/Login';
import { firebase, db, auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";


function App() {
  // const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        // setUser(authUser);
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })

      } else {
        //user has logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        })
      }

    })
    return () => {
      // perform clean up 
      unsubscribe();
    }
  }, [user, username]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />

                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>

                {/* React-Router -> Chat Screen */}
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
