import React, { useState } from "react";

function MotivationExerciseTable( {id, importance, importance2, importance3, importance4, importance5, status, status2, status3, status4, status5, motivation1, motivation2, motivation3, motivation4, motivation5, onFormSubmit} ) {
    
    const initialData = {
       importance:'',
       importance2:'',
       importance3:'',
       importance4:'',
       importance5:'',
       status:'',
       status1:'',
       status2:'',
       status3:'',
       status4:'',
        }

const [formData, setFormData] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    console.log(e.target.value)
    setFormData({...formData, [name]: value})
    }


function handleSubmitForm(e) {
    e.preventDefault()

    fetch(`/motivations/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(onFormSubmit)
    .then(setFormData(initialData))
}


    return (
<table class="ui selectable celled table">
  <thead>
    <tr>
      <th>My Motivations</th>
      <th>Importance</th>
      <th>Status in My Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{motivation1}</td>
      <td>{importance}</td>
      <td>{status}</td>
    </tr>
    <tr>
      <td>{motivation2}</td>
      <td>{importance2}</td>
      <td>{status2}</td>
    </tr>
    <tr>
      <td>{motivation3}</td>
      <td>{importance3}</td>
      <td>{status3}</td>
    </tr>
    <tr>
      <td>{motivation4}</td>
      <td>{importance4}</td>
      <td>{status4}</td>
    </tr>
    <tr>
      <td>{motivation5}</td>
      <td>{importance5}</td>
      <td>{status5}</td>
    </tr>

  </tbody>
</table>

    )

}

export default MotivationExerciseTable