
import React from "react";
import {useState} from "react";

function Stakeholder2Form( { id, onStakeholderSubmit, s2q1, s2q2, s2q3, s2q4, s2q5, s2q6 } ) {
   
    const initialData = {
        s2q1:'',
        s2q2:'',
        s2q3:'',
        s2q4:'',
        s2q5:'',
        s2q6:'',
        }

const [formData, setFormData] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    console.log(e.target.value)
    setFormData({...formData, [name]: value})
    }


function handleSubmitForm(e) {
    e.preventDefault()

    fetch(`/stakeholders/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(onStakeholderSubmit)
    .then(setFormData(initialData))
}

return (
<>

<div class="ui six column grid">
<form class="ui form" onSubmit={handleSubmitForm}>
<div class="column">

<div class="ui form">
<div class="field">
    <label>Who is important to the success of myself or my team?</label>
    <textarea value={formData.s2q1} type="text" name="s2q1" placeholder="What person or team?" onChange={handleFormChange}/>
</div>

  <div class="column">

  <div class="ui form">
    <div class="field">
        <label>What outcomes do we share (e.g. goal, project)?</label>
        <textarea value={formData.s2q2} type="text" name="s2q2" placeholder="Shared OKRs, goals or outcomes?" onChange={handleFormChange}/>
    </div>
  </div>
  </div>

  <div class="column">
  <div class="ui form">
    <div class="field">
        <label>What does success look like for them/their team? What is important to them/their team?</label>
        <textarea value={formData.s2q3} type="text" name="s2q3" placeholder="What are their priorities?" onChange={handleFormChange}/>
    </div>
  </div>

  </div>

  <div class="column">

  <div class="ui form">
    <div class="field">
        <label>What do I need from them/their team?</label>
        <textarea value={formData.s2q4} type="text" name="s2q4" placeholder="What are the things I'm asking for?" onChange={handleFormChange}/>
    </div>
  </div>

  </div>

  <div class="column">

  <div class="ui form">
    <div class="field">
        <label>What is our communication cadence (communication, meeting frequency)?</label>
        <textarea value={formData.s2q5} type="text" name="s2q5" placeholder="Style, frequency, initiator" onChange={handleFormChange}/>
    </div>
  </div>
  </div>

  <div class="column">

  <div class="ui form">
    <div class="field">
        <label>Anything in particular I should remember about this person's style of work?</label>
        <textarea value={formData.s2q6} type="text" name="s2q6" placeholder="Their preferred commuincation style etc." onChange={handleFormChange}/>
    </div>
  </div>

  </div>
  
  </div>
<button class="ui green right floated button">Submit</button>

</div>

</form>
</div>

</>
)
}
export default Stakeholder2Form