import React, { useEffect } from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";
import Reflection from "./Reflection";
import Motivation from "./Motivation";
import MotivationDrill from "./MotivationDrill";
import Commit from "./Commit";
import Stakeholders from "./Stakeholders";
import LandingPage from "./LandingPage";
import DashboardLayout from "./DashboardLayout";
import EditProfile from "./EditProfile";


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

  console.log(user)
  if (!user) return <LandingPage setUser = {setUser}/>;

  return (
  <>
    <Header
    user={user} setUser={setUser}/>

  <main>

    <Routes>
      <Route path="/" element={<DashboardLayout/>} exact />
        <Route index element={<Home/>}  />
        <Route path="reflection" element={<Reflection
        user={user} setUser={setUser}/>}/>

        <Route path="motivation" element={<Motivation/>}/>

        <Route path="drill" element={<MotivationDrill/>}/>

        <Route path="commit" element={<Commit/>}/>

        <Route path="stakeholders" element={<Stakeholders/>}/>
        
        <Route exact path="/edit-profile" element={<EditProfile
        user={user}
        setUser={setUser}
        />}/>
    </Routes>
</main>
</>
  );
}

export default App;