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
<div>

<div class="ui grid">
<div class="sixteen wide column">
< NavLink to="/activities"> 

<img class="ui top aligned fluid image" src="/images/WeeklyCommitSign.svg"/>
</NavLink>
</div>

</div>
</div>



<div class="ui grid">
  <div class="two wide column"></div>
  <div class="twelve wide column">
    <div class="ui basic segment"> 
    <div class="ui large header"> Make a Commitment</div>
    <p> 
    Making a commitment is important because it helps us to set clear goals, stay motivated, and build trust and accountability. By committing to something, we demonstrate our reliability and willingness to follow through, which can help us grow and develop personally while strengthening relationships with others. </p> <p> Commitments also help to build trust and accountability, both with ourselves and with others. By making a commitment and following through on it, we demonstrate to ourselves and others that we are reliable, trustworthy, and accountable for our actions. This can help to strengthen relationships and build a sense of mutual respect and understanding.
    </p>
    </div>
  {commitResponse}
{commitResponseTwo}

<div class="ui segment">
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
<br></br>
<br></br>
</div>









  </div>
  <div class="two wide column"></div>

</div>

<div class="ui grid">
<div class="two wide column">
      < NavLink to="/drill"> <button class="ui labeled icon button">
    <i class="left chevron icon"></i>
    Back
  </button></NavLink>

      </div>

      <div class="twelve wide column"></div>

      <div class="two wide column">
      < NavLink to="/stakeholders"><button class="ui right labeled icon button">
    Next
    <i class="right chevron icon"></i>
  </button></NavLink>

      </div>

   </div>

</>
)
}

export default Commit;