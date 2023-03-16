import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";


import LandingPage from "./LandingPage";


function App() {

  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([]);



  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);


  if (!user) return <LandingPage setUser = {setUser}/>;

  return (
    <>
    <Header
    user={user} setUser={setUser}/>
      <main>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/edit-profile" element={<EditProfile
        user={user}
        setUser={setUser}
        />}/> */}

        </Routes>
      </main>
    </>
  );
}

export default App;