import React from "react";
import MiniMotivCard from "./MiniMotivCard";

function MotivationResponseCards( { user, exerciseList, motivationList} ) {

   console.log("miniMotivCard", exerciseList)

   const zip = motivationList.map((mot, idx)  => ({ ...mot, ...exerciseList[idx]}))
   
   const motivCard = zip.map( z => <MiniMotivCard { ...z}/>)


return (
<>
<br></br>
<div class="ui small header"> Use this view of your work priorities, their importance to you, and how fulfilled you feel currently to guide conversations with your manager, and assess your satisfaction in your current role. You can also use this map with your direct reports to gauge their motivations and feelings of fulfillment. </div>

<br></br>
{motivCard}
<br></br>
</>
)
}

export default MotivationResponseCards;