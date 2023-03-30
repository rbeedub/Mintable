import React, { useEffect, useContext } from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react'
import { UserContext } from '../context/user';
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
import FiveDimensions from "./FiveDimensions";
import Aware from "./Aware";
import Activities from "./Activities";
import Overview from "./Overview";


function App() {

  // const [user, setUser] = useState(null);

  const [user, setUser] = useContext(UserContext)

  const [motivationList, setMotivationList] = useState([])
  const [exerciseList, setExerciseList] = useState([])
  const [reflectionText, setReflectionText] = useState([])
  const [commitText, setCommitText] = useState([])
  const [stakeholderText, setStakeholderText] = useState([])

 console.log("user", user)


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
          setStakeholderText(user.stakeholders) 
          console.log("stakeholders", user.stakeholders)
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

  function onStakeholderSubmit(newSubmit) {
    setStakeholderText([newSubmit])
  }



  if (!user) return <LandingPage/>;

  return (
  <>
    <Header/>

  <main>

    <Routes>
      <Route path="/" element={<DashboardLayout/>} exact />
        <Route index element={<Home/>}  />

        <Route path="reflection" element={<Reflection
        setReflectionText={setReflectionText}
        reflectionText={reflectionText}
        onReflectionSubmit={onReflectionSubmit}
        />}/>

        <Route path="motivation" element={<MotivationMap
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
   
        />}/>

        <Route path="commit" element={<Commit
        onCommitSubmit={onCommitSubmit}
        setCommitText={setCommitText}
        commitText={commitText}
        />}/>

        <Route path="stakeholders" element={<Stakeholders
        stakeholderText={stakeholderText}
        onStakeholderSubmit={onStakeholderSubmit}
        />}/>
        
        <Route exact path="edit-profile" element={<EditProfile/>}/>
        <Route exact path="five-dimensions" element={<FiveDimensions/>}/>
        <Route exact path="aware" element={<Aware/>}/>
        <Route exact path="activities" element={<Activities/>}/>
        <Route exact path="overview" element={<Overview
        motivationList={motivationList}
        exerciseList={exerciseList}
        />}/>

        {/* <Route exact path="aware" element={<Aware/>}/>
        <Route exact path="aware" element={<Aware/>}/>
        <Route exact path="aware" element={<Aware/>}/>
        <Route exact path="aware" element={<Aware/>}/>
        <Route exact path="aware" element={<Aware/>}/> */}


    </Routes>
</main>
</>
  );
}

export default App;