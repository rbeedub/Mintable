import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection( { setReflectionText, reflectionText, onReflectionSubmit } ) {
// const [reflection, setReflection] = useState([])
console.log(reflectionText)



const reflectionResponse = reflectionText.map(reflection  => {
   return <ReflectionCard key={reflection.id} {...reflection} setReflectionText={setReflectionText} reflectionText={reflectionText} onReflectionSubmit={onReflectionSubmit} />
}
)


return (
<>
   {reflectionResponse}

</>
)
}

export default Reflection;