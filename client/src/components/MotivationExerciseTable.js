import React, { useState } from "react";
import MiniMotivationCard from "./MiniMotivationCard";


function MotivationExerciseTable( {id, importance, importance2, importance3, importance4, importance5, status, status2, status3, status4, status5, onFormSubmit, motivationList} ) {
    

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
<form >
<table class="ui selectable celled table">
  <thead>
    <tr>
    
      <th>Out of 10, how important is this to you (1 being the least important, and 10 being the most important) </th>
      <th>How much of your time and energy goes here in any given day or week? (1 being very little, and 10 being a lot)</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>1. {importance}  / 10
      <div class="ui form">
        <div class="field">
            <input value={formData.importance} type="text" name="importance" onChange={handleFormChange}/>
        </div>
        </div>
      </td>
      <td>1. {status}
      <div class="ui form">
        <div class="field">
            <input value={formData.status} type="text" name="status" onChange={handleFormChange} /> 
        </div>
        </div>
      </td>
    </tr>
    <tr>
   
      <td>2.{importance2}  / 10
      <div class="ui form">
        <div class="field">
            <input value={formData.importance2}  type="text" name="importance2" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
      <td>2. {status2}
      <div class="ui form">
        <div class="field">
            <input value={formData.status2} type="text" name="status2" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
    </tr>
    <tr>
   
      <td>3. {importance3}  / 10
      <div class="ui form">
        <div class="field">
            <input value={formData.importance3} type="text" name="importance3" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
      <td>3. {status3}
      <div class="ui form">
        <div class="field">
            <input  value={formData.status3} type="text" name="status3" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
    </tr>
    <tr>
    
      <td>4. {importance4}  / 10
      <div class="ui form">
        <div class="field">
            <input value={formData.importance4} type="text" name="importance4" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
      <td>4. {status4}
      <div class="ui form">
        <div class="field">
            <input value={formData.status4} type="text" name="status4" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
    </tr>
    <tr>

      <td>5. {importance5}  / 10
      <div class="ui form">
        <div class="field">
            <input value={formData.importance5} type="text" name="importance5" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
      <td>5. {status5}
      <div class="ui form">
        <div class="field">
            <input value={formData.status5} type="text" name="status5" onChange={handleFormChange}/> 
        </div>
        </div>
      </td>
    </tr>
    <tr>
 
      <td></td>
      <td><button class="ui button">Submit</button></td>
    </tr>

  </tbody>
</table>
</form>
    )

}

export default MotivationExerciseTable