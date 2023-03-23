import React from "react";
import MiniMotivationCard from "./MiniMotivationCard";
import MotivationExerciseTable from "./MotivationExerciseTable";
import MotivationResponseCards from "./MotivationResponseCards";

function MotivationDrill( {user, onExerciseFormSubmit, motivationList, exerciseList, setExerciseList} ) {

   console.log(motivationList)

   const motivationExTbl = exerciseList.map(exercise  => {
      return <MotivationExerciseTable key={exercise.id} {...exercise} user={user} onExerciseFormSubmit={onExerciseFormSubmit} />
   }
   )

   const motivationsResponse = motivationList.map(motivation  => {
      return <MiniMotivationCard key={motivation.id} {...motivation} user={user} />
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
   user={user}
   />

   </div>
   <div class="one wide  column"></div>
</div>
</>
)
}

export default MotivationDrill;