import React from "react";
import MiniMotivCard from "./MiniMotivCard";

function MotivationResponseCards( { user, exerciseList, motivationList} ) {

   console.log(user)

   const zip = motivationList.map((mot, idx)  => ({ ...mot, ...exerciseList[idx]}))
   
   const motivCard = zip.map( z => <MiniMotivCard { ...z}/>)


return (
<>
<div>What we're looking for are the biggest discrpancies between numbers that signal that something is out of whack, not working or needs to be realigned. </div>
<br></br>
{motivCard}

</>
)
}

export default MotivationResponseCards;