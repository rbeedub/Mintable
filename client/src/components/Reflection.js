import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection( { user, reflections } ) {
const [reflection, setReflection] = useState([])

const { id, cohort, company, name, bio } = user

console.log(reflections)

const reflectionCards = reflections?.map((r) => {
   return <ReflectionCard key={id} notes={r.notes} user={user}/>
})

// useEffect(() => {
//    fetch(`/reflections/${id}`)
//    .then(response => response.json())
//    .then((response) => console.log(response))
// }, []
// )
// console.log(reflection)


return (
<>

{reflectionCards}

</>
)
}

export default Reflection;