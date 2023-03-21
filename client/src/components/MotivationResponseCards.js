import React from "react";
import MiniMotivCard from "./MiniMotivCard";

function MotivationResponseCards( { user, exerciseList, motivationList} ) {

    const miniMotivationsResponse = motivationList.map(motivation  => {
        return <MiniMotivCard key={motivation.id} {...motivation} user={user} />
     }
     )

     const miniMotivationExTbl = exerciseList.map(exercise  => {
        return <MiniMotivCard key={exercise.id} {...exercise} user={user} />
     }
     )

return (
<>
<div>What we're looking for are the biggest discrpancies between numbers that signal that something is out of whack, not working or needs to be realigned. </div>
<br></br>
{miniMotivationsResponse}
{miniMotivationExTbl}
</>
)
}

export default MotivationResponseCards;