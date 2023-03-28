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
   <div class="three wide  column">{motivationsResponse}</div>
   <div class="nine wide  column">
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