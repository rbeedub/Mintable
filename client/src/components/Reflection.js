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
<div>

<div class="ui grid">
<div class="sixteen wide column">
< NavLink to="/activities"> 
<img class="ui top aligned fluid image" src="/images/ReflectionSign.svg"/>
</NavLink>
</div>

</div>
</div>

<div class="ui grid">

<div class="two wide column">

</div>
<div class="twelve wide column">
<div class="ui hidden divider"></div>

   <div class="ui large header"> The Dimensions of Great Leadership</div>
   <div class="ui hidden divider"></div>
   <div class="ui hidden divider"></div>


   <p>There’s no one answer to the question: “What does great management look like?”. 

   That’s because each manager is working in a unique environment with a unique team. They bring a unique combination of strengths and experiences to the table.
   However, we’ve developed 100s of managers over the years and have seen which skills and attributes lead to great outcomes.

   We organize these into 5 dimensions of management: </p>

   <img class="ui fluid image" src="./images/leadershipbanner.svg"/>
   <div class="ui hidden divider"></div>

   <p>
   Each of these dimensions represents a cluster of thinking, attitudes, capabilities, and behaviors that we see successful managers practice. To begin, managers may be better at 1-2 of the dimensions. Great managers work at flexing across the dimensions.
   </p>
   <div class="ui hidden divider"></div>

</div>
<div class="two wide column"></div>

</div>

   <DimensionBehaviors />
   {reflectionResponse}



   <div class="ui grid">
   <div class="two wide column">
      < NavLink to="/activities">    <button class="ui labeled icon button">
    <i class="left chevron icon"></i>
    Back
  </button></NavLink>

      </div>
      <div class="twelve wide column"></div>
      <div class="two wide column">
      < NavLink to="/motivation">   <button class="ui right labeled icon button">
    Next
    <i class="right chevron icon"></i>
  </button></NavLink>

      </div>

   </div>
</>
)
}

export default Reflection;