import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";
import DimensionBehaviors from "./DimensionBehaviors";

function Reflection( { setReflectionText, reflectionText, onReflectionSubmit } ) {
// const [reflection, setReflection] = useState([])
console.log(reflectionText)



const reflectionResponse = reflectionText.map(reflection  => {
   return <ReflectionCard key={reflection.id} {...reflection} setReflectionText={setReflectionText} reflectionText={reflectionText} onReflectionSubmit={onReflectionSubmit} />
}
)


return (
<>
   <DimensionBehaviors />
   {reflectionResponse}

</>
)
}

export default Reflection;