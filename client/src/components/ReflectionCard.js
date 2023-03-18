import React, { useState } from "react";




function ReflectionCard( {id, user, notes} ) {

   const [formData, setFormData] = useState(user)
   const [reflection, setReflection] = useState([])

   function handleFormSubmit(e){
       e.preventDefault()

       fetch(`/reflections/${id}`, {
           method: 'PATCH',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then(r => {
           if(r.ok){
               r.json().then(data => {
                   setReflection(data)
               })
           }
       })
   }


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

   {notes}</div>
</div>

<div class="ten wide column">
What are your thoughts?
<form class="ui reply form" onSubmit={handleFormSubmit} >
    <div class="field" value={formData.notes} type="text" name="notes" placeholder="Notes" onChange={handleFormChange} >
   <textarea> </textarea>
    </div>
    <div class="ui blue labeled submit icon button">
      <i class="icon edit"></i> Submit Answer
    </div>
  </form>

</div>
</div>
</>
)
}


export default ReflectionCard