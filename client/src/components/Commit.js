import React from "react";
import CommitCard from "./CommitCard";
import CommitCard2 from "./CommitCard2";
import { ManagerEmailForm } from "./ManagerEmailForm";

function Commit( { onCommitSubmit, setCommitText, commitText} ) {

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
{commitResponse}
{commitResponseTwo}
<ManagerEmailForm 
commitText={commitText} />
</>
)
}

export default Commit;