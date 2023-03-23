import React from "react";
import MiniMotivCard from "./MiniMotivCard";

function MotivationResponseCards( { user, exerciseList, motivationList} ) {

   console.log(user)

   const zip = motivationList.map((mot, idx)  => ({ ...mot, ...exerciseList[idx]}))
   
   const motivCard = zip.map( z => <MiniMotivCard { ...z}/>)


return (
<>
<br></br>
<div class="ui large header">What we're looking for are the biggest discrpancies between how important something is to you, and how much time and energy that thing is getting in your work. This can be a signal that something is out of whack, not working or needs to be realigned.</div>

<br></br>
{motivCard}

</>
)
}

export default MotivationResponseCards;