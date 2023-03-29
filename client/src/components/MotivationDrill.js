import React from "react";
import MiniMotivationCard from "./MiniMotivationCard";
import MotivationExerciseTable from "./MotivationExerciseTable";
import MotivationResponseCards from "./MotivationResponseCards";
import { NavLink } from "react-router-dom";

function MotivationDrill( { onExerciseFormSubmit, motivationList, exerciseList, setExerciseList} ) {

   console.log(motivationList)

   const motivationExTbl = exerciseList.map(exercise  => {
      return <MotivationExerciseTable key={exercise.id} {...exercise}  onExerciseFormSubmit={onExerciseFormSubmit} />
   }
   )

   const motivationsResponse = motivationList.map(motivation  => {
      return <MiniMotivationCard key={motivation.id} {...motivation}  />
   }
   )

return (
<>
<div class="ui grid">
   <div class="two wide  column"></div>
   <div class="three wide  column">
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>

      {motivationsResponse}</div>
   <div class="nine wide  column">
      <div class="ui large header"> Understand How Fullfilled You Feel</div>
      <br></br>
      <p> Knowing what drives you is important. In the last exercise, we spent time thinking about work motivations, and now it's time to think about how fulfilled you're feeling by your current role.</p> 
      <p> Specifically, we want you to investigate how important the things that motivate you are, and then to think about how much fullfillment that motivation recieves currently in your role.</p> <p> Let's say that you're highly motivated by collaboration. You're currently working remotely on a siloed team and you might find that though collaboration is very important, your need is not being fullfilled in your current role. This exercise aims to help uncover these kinds of discrepancies.</p>
      {motivationExTbl}
   </div>
   <div class="two wide  column"></div>
   <div class="one wide  column"></div>
   <div class="fourteen wide column">
   <MotivationResponseCards
   motivationList={motivationList}
   exerciseList={exerciseList}

   />

   </div>
   <div class="one wide  column"></div>
</div>
<div class="ui grid">

<div class="two wide column">
      < NavLink to="/motivation"> <button class="ui tiny button"> Previous Activity</button></NavLink>

      </div>

      <div class="twelve wide column"></div>

      <div class="two wide column">
      < NavLink to="/commit"> <button class="ui tiny purple button"> Next Activity</button></NavLink>

      </div>

   </div>
</>
)
}

export default MotivationDrill;