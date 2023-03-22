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
  const [motivationList, setMotivationList] = useState([])
  const [exerciseList, setExerciseList] = useState([])
  const [reflectionText, setReflectionText] = useState([])
  const [commitText, setCommitText] = useState([])

 


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user)  => { 
          setExerciseList(user.exercises);
          console.log("exercises", user.exercises)
          setMotivationList(user.motivations);
          console.log("motivations", user.motivations);
          setReflectionText(user.reflections);
          console.log("reflections", user.reflections)
          setCommitText(user.commits)
          console.log("commits", user.commits)
          setUser(user)});
      }
    });

  }, []);


  function onFormSubmit(newSubmit) {
    setMotivationList([newSubmit])
  }

  function onExerciseFormSubmit(newSubmit) {
    setExerciseList([newSubmit])
  }

  function onReflectionSubmit(newSubmit) {
    console.log(newSubmit)
    setReflectionText([newSubmit])
  }

  function onCommitSubmit(newSubmit) {
    setCommitText([newSubmit])
  }


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
        user={user} setUser={setUser} setReflectionText={setReflectionText} reflectionText={reflectionText}
        onReflectionSubmit={onReflectionSubmit}
        />}/>

        <Route path="motivation" element={<MotivationMap
        user={user}
        setUser={setUser}
        onFormSubmit={onFormSubmit}
        motivationList={motivationList}
        setMotivationList={motivationList}/>
        }/>

        <Route path="drill" element={<MotivationDrill
        onExerciseFormSubmit={onExerciseFormSubmit}
        motivationList={motivationList}
        setMotivationList={setMotivationList}
        exerciseList={exerciseList}
        setExerciseList={setExerciseList}
        user={user}
        setUser={setUser}
        />}/>

        <Route path="commit" element={<Commit
        onCommitSubmit={onCommitSubmit}
        setCommitText={setCommitText}
        commitText={commitText}
        user={user}
        />}/>

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