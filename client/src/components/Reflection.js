import React, { useState } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection({user, setUser}) {
const [reflection, setReflection] = useState([])
console.log(reflection)

    fetch("/reflections").then((r) => {
      if (r.ok) {
        r.json().then((data) => setReflection(data));
      }
    // });

   }, []);


return (
<>
<ReflectionCard
user={user} setUser={setUser} />

</>
)
}

export default Reflection;