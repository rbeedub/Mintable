import React from "react";
import MiniMotivCard from "./MiniMotivCard";

function MotivationResponseCards( { user, exerciseList, motivationList} ) {

   console.log("miniMotivCard", exerciseList)

   const zip = motivationList.map((mot, idx)  => ({ ...mot, ...exerciseList[idx]}))
   
   const motivCard = zip.map( z => <MiniMotivCard { ...z}/>)


return (
<>
<br></br>
<div class="ui large center aligned header"> What we're looking for are the biggest discrepancies between how important something is to you, and whether or not it's getting fulfilled in your current role. This can be a signal that you have unmet needs, something is out of whack, not working or needs to be realigned.</div>

<br></br>
{motivCard}
<br></br>
</>
)
}

export default MotivationResponseCards;