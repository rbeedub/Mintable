import React from "react";
import CommitCard from "./CommitCard";
import CommitCard2 from "./CommitCard2";
import { ManagerEmailForm } from "./ManagerEmailForm";
import { useState } from "react"; 
import { NavLink } from "react-router-dom"

function Commit( { onCommitSubmit, setCommitText, commitText} ) {
  const [showEmailBtn, setShowEmailBtn] = useState(true);

console.log("commit component", commitText)
  const commitResponse = commitText.map(commit  => {
    return <CommitCard key={commit.id} {...commit} onCommitSubmit={onCommitSubmit} />
 }
 )
 const commitResponseTwo = commitText.map(commit  => {
  return <CommitCard2 key={commit.id} {...commit} onCommitSubmit={onCommitSubmit} />
}

)

  return (

<>




<div class="ui grid">
  <div class="two wide column"></div>
  <div class="twelve wide column">
  {commitResponse}
{commitResponseTwo}

<div>
  <div> Do you want to send an email to your manager with your commitment? </div>
{showEmailBtn ?

<>

<button class="ui left floated button" onClick={() => setShowEmailBtn(!showEmailBtn)}> Email</button>
</>

:
<>
<ManagerEmailForm
commitText={commitText} />
    <button class="ui red right floated button" onClick={() => setShowEmailBtn(!showEmailBtn)}> Close </button>
</>
}
</div>









  </div>
  <div class="two wide column"></div>

</div>

<div class="ui grid">
<div class="two wide column">
      < NavLink to="/drill"> <button class="ui tiny button"> Previous Activity</button></NavLink>

      </div>

      <div class="twelve wide column"></div>

      <div class="two wide column">
      < NavLink to="/stakeholders"> <button class="ui tiny purple button"> Next Activity</button></NavLink>

      </div>

   </div>

</>
)
}

export default Commit;