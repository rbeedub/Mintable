import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";

function Reflection( { user } ) {
// const [reflection, setReflection] = useState([])



const reflectionResponse = user?.reflections.map(reflection  => {
   return <ReflectionCard key={reflection.id} {...reflection} user={user} />
}
)


return (
<>
{reflectionResponse}</>
)
}

export default Reflection;