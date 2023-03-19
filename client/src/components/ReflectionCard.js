import React, { useState } from "react";
import TextEditor from "./TextEditor";




function ReflectionCard( {id, notes, user} ) {


  const [formData, setFormData] = useState(user)

  function handleFormChange(e){
      const newData = {...formData, [e.target.name]: e.target.value}
      setFormData(newData)
  }

return (
<>

<div class="ui grid">
<div class="six wide column">
<div class="ui raised segment">
What might you do differently moving forward?
</div>
You answered...

<div class="ui raised segment">
{notes}
</div>
</div>

<div class="ten wide column">
What are your thoughts?
<form class="ui reply form"  >
<TextEditor />
  </form>

</div>
</div>
</>
)
}


export default ReflectionCard