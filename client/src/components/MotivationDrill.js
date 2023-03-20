import React from "react";
import MotivationExerciseTable from "./MotivationExerciseTable";

function MotivationDrill( {user, onFormSubmit, motivationList} ) {

   const motivationExTbl = motivationList.map(motivation  => {
      return <MotivationExerciseTable key={motivation.id} {...motivation} user={user} onFormSubmit={onFormSubmit} />
   }
   )

return (
<>

<div class="ui grid">
    <div class="two wide pink column"></div>
    <div class="twelve wide grey column">
    {motivationExTbl}
    <div class="column">
    <div class="ui three column grid">
        <div class="orange column"></div>
         <div class="green column"> </div>
        <div class="teal column"> </div>
    </div>
    </div>
    </div>
    <div class="two wide pink column"></div>
 </div>
</>
)
}

export default MotivationDrill;