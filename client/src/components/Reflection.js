import React, { useState, useEffect } from "react";
import ReflectionCard from "./ReflectionCard";
import DimensionBehaviors from "./DimensionBehaviors";
import { NavLink } from "react-router-dom";

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
   <div class="ui grid">
      <div class="fourteen wide column"></div>
      <div class="two wide column">
      < NavLink to="/motivation"> <button class="ui tiny purple button"> Next Activity</button></NavLink>

      </div>

   </div>
</>
)
}

export default Reflection;