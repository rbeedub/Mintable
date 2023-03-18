import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection( { user } ) {
const [reflection, setReflection] = useState([])

const { id, cohort, company, name, bio } = user


useEffect(() => {
   fetch(`/reflections/${id}`)
   .then(response => response.json())
   .then((response) => console.log(response))
}, []
)
// console.log(reflection)


return (
<>
<ReflectionCard
name={name}  reflection={reflection} />

</>
)
}

export default Reflection;