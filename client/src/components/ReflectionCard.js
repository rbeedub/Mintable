import React, { useState } from "react";
import TextEditor from "./TextEditor";
import { UserContext } from "../context/user";
import { useContext } from "react";




function ReflectionCard( {id, notes, setReflectionText, onReflectionSubmit, reflectionText} ) {

  console.log(reflectionText)

  const [user, setUser] = useContext(UserContext)
  
  const [formData, setFormData] = useState(user)

  function handleFormChange(e){
      const newData = {...formData, [e.target.name]: e.target.value}
      setFormData(newData)
  }

return (
<>


<div class="ui grid">
<div class="one wide column"></div>
<div class="five wide column">
<div class="ui raised segment">
<p>Which dimension resonates the most with you? </p>
<p>Which dimension do you want to develop?</p>

</div>
You answered...

<div class="ui raised segment">
<div dangerouslySetInnerHTML={{__html:notes}} />
{/* 
{notes} */}
</div>
</div>

<div class="ten wide column">
<form class="ui reply form"  >
<TextEditor 
id={id}
setReflectionText={setReflectionText}
reflectionText={reflectionText}
onReflectionSubmit={onReflectionSubmit}
/>
  </form>

</div>
</div>
</>
)
}


export default ReflectionCard