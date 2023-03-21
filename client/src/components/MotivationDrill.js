import React from "react";
import MiniMotivationCard from "./MiniMotivationCard";
import MotivationExerciseTable from "./MotivationExerciseTable";
import MotivationResponseCards from "./MotivationResponseCards";

function MotivationDrill( {user, onExerciseFormSubmit, motivationList, exerciseList, setExerciseList} ) {

   console.log(motivationList)

   const motivationExTbl = exerciseList.map(exercise  => {
      return <MotivationExerciseTable key={exercise.id} {...exercise} user={user} onFormSubmit={onExerciseFormSubmit} />
   }
   )

   const motivationsResponse = motivationList.map(motivation  => {
      return <MiniMotivationCard key={motivation.id} {...motivation} user={user} />
   }
   )

return (
<>

<div class="ui grid">
   <div class="two wide pink column"></div>
   <div class="three wide pink column">{motivationsResponse}</div>
   <div class="nine wide grey column">{motivationExTbl}
   </div>
   <div class="two wide pink column"></div>
   <div class="one wide grey column"></div>
   <div class="fourteen wide column">
   <MotivationResponseCards
   motivationList={motivationList}
   exerciseList={exerciseList}
   user={user}
   />

   </div>
   <div class="one wide grey column"></div>
</div>
</>
)
}

export default MotivationDrill;