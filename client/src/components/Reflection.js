import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection( { user, setReflectionText, reflectionText, onReflectionSubmit } ) {
// const [reflection, setReflection] = useState([])
console.log(reflectionText)



const reflectionResponse = user?.reflections.map(reflection  => {
   return <ReflectionCard key={reflection.id} {...reflection} user={user} setReflectionText={setReflectionText} reflectionText={reflectionText} onReflectionSubmit={onReflectionSubmit} />
}
)


return (
<>
   {reflectionResponse}

</>
)
}

export default Reflection;