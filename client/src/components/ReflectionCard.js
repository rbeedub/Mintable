import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




function ReflectionCard( {user, name} ) {

   const [formData, setFormData] = useState(user)
   const [errors, setErrors] = useState([])
   let navigate = useNavigate()

   function handleFormSubmit(e){
      e.preventDefault()

      // fetch(`/reflections/${user.id}`, {
      //    method: 'PATCH',
      //    headers: {
      //       "Content-Type": "application/json"
      //    },
      //    body: JSON.stringify(formData)
      // })
      // .then(response => {
      //       response.json().then(data => {
      //          setUser(data)
      //       })
      //     }, []);

function handleFormChange(e) {
   const newData = { ...formData, [e.target.name]: e.target.value}
   setFormData(newData)
}

return (
<>
<div class="ui basic segment">
   <p>{user.name}, which dimension resonates the most with you?</p>
   <form value={formData.notes} type="notes" name="notes" placeholder="Notes" onChange={handleFormChange} class="ui reply form">
   <div class="field">
   <textarea></textarea>
   </div>
   <div class="ui blue labeled submit icon button">
   <i class="icon edit"></i> Add Answer
   </div>
</form>
</div>

</>
)
}
}

export default ReflectionCard