import React from "react";
import CommitCard from "./CommitCard";
import CommitCard2 from "./CommitCard2";

function Commit( { user, onCommitSubmit, setCommitText, commitText} ) {

  const commitResponse = commitText.map(commit  => {
    return <CommitCard key={commit.id} {...commit} user={user} onCommitSubmit={onCommitSubmit} />
 }
 )
 const commitResponseTwo = commitText.map(commit  => {
  return <CommitCard2 key={commit.id} {...commit} user={user} onCommitSubmit={onCommitSubmit} />
}
)

  return (

<>
{commitResponse}
{commitResponseTwo}

</>
)
}

export default Commit;