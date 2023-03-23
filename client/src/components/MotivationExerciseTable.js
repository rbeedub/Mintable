import React, { useState } from "react";
import MiniMotivationCard from "./MiniMotivationCard";


function MotivationExerciseTable( {id, importance, importance2, importance3, importance4, importance5, status, status2, status3, status4, status5, onExerciseFormSubmit} ) {

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

    fetch(`/exercises/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(onExerciseFormSubmit)
    .then(setFormData(initialData))
}


    return (

<>

<div class="column">
  <div>
  <p>How important is this to you? Look at each of these 5 things and assign them the percentage the corresponds to how important this is to you. This column should total 100% </p>
  <br></br>
  <br></br>
  </div>
</div>
  <div class="column">



  <form class="ui form" onSubmit={handleSubmitForm}>
    <div class="ui form" >
    <div class="field">
      <input value={formData.importance} name="importance" placeholder="#1 importance % of 100" type="text" onChange={handleFormChange} />
    </div>
    <div class="field">

      <input value={formData.importance2} name="importance2" placeholder="#2 importance % of 100" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">

      <input value={formData.importance3} name="importance3" placeholder="#3 importance % of 100" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">
      <input value={formData.importance4} name="importance4" placeholder="#4 importance % of 100" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">

      <input value={formData.importance5} name="importance5" placeholder="#5 importance % of 100" type="text" onChange={handleFormChange}/>
    </div>
    <br></br>
      <br></br>

      <p>On a scale of 1 - 10, 1 being the least and 10 being the most, how much time, eneregy and effort are you spending on each of things that motivates you?</p>

    <div class="field">
    <input value={formData.status} name="status" placeholder="#1 movtivation" type="text" onChange={handleFormChange} />
    </div>
    <div class="field">

      <input value={formData.status1} name="status1" placeholder="#2 movtivation" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">

      <input value={formData.status2} name="status2" placeholder="#3 movtivation" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">

      <input value={formData.status3} name="status3" placeholder="#4 movtivation" type="text" onChange={handleFormChange}/>
    </div>
    <div class="field">

      <input value={formData.status4} name="status4" placeholder="#5 movtivation" type="text" onChange={handleFormChange}/>
    </div>

    <button class="ui button">Submit</button>

  </div>
  </form>
  </div>

</>

    )

}

export default MotivationExerciseTable