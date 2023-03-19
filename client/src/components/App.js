import React, { useEffect } from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react'
import Header from "./Header";
import Home from "./Home";
import Reflection from "./Reflection";
import MotivationMap from "./MotivationMap";
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
  const [workbook, setWorkbook] = useState([])
  const [motivations, setMotivations] = useState()
 


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user), setMotivations(user?.motivations)
        );
      }
    });

  }, []);


console.log(motivations)

  // useEffect(() => {
  //   // auto-login
  //   if (user) {
  //   fetch(`/workbooks/${user.workbook.week.id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((res) => setWorkbook(res));
  //     }
  //   });
  // }
  // }, [user])




  //   fetch("/workbook").then((r) => {
  //     if (r.ok) {
  //       r.json().then((workbook) => setWorkbook(user));
  //     }
  //   });

  // }, []);
 
  function onFormSubmit(newSubmit) {
    setMotivations(motivations.map((item) => item.id === newSubmit.id ? newSubmit : item));
  }


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
        user={user} setUser={setUser}
        />}/>

        <Route path="motivation" element={<MotivationMap
        user={user} setUser={setUser} onFormSubmit={onFormSubmit} motivations={motivations} />}/>

        <Route path="drill" element={<MotivationDrill/>}/>

        <Route path="commit" element={<Commit/>}/>

        <Route path="stakeholders" element={<Stakeholders/>}/>
        
        <Route exact path="edit-profile" element={<EditProfile
        user={user}
        setUser={setUser}
        />}/>
    </Routes>
</main>
</>
  );
}

export default App;