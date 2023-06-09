
import React from "react";
import {useState} from "react";

function Stakeholder1Form( { id, onStakeholderSubmit, q1, q2, q3, q4, q5, q6 } ) {
   
    const initialData = {
        q1:'',
        q2:'',
        q3:'',
        q4:'',
        q5:'',
        q6:'',
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


<form class="ui form" onSubmit={handleSubmitForm}>
{/* <div class="column"> */}

<div class="ui form">
<div class="field">
    <label>Who is important to the success of myself or my team?</label>
    <textarea value={formData.q1} type="text" name="q1" placeholder="What person or team?" onChange={handleFormChange}/>
</div>


  <div class="ui form">
    <div class="field">
        <label>What outcomes do we share (e.g. goal, project)?</label>
        <textarea value={formData.q2} type="text" name="q2" placeholder="Shared OKRs, goals or outcomes?" onChange={handleFormChange}/>
    </div>
  </div>


  <div class="ui form">
    <div class="field">
        <label>What does success look like for them/their team? What is important to them/their team?</label>
        <textarea value={formData.q3} type="text" name="q3" placeholder="What are their priorities?" onChange={handleFormChange}/>
    </div>
  </div>



  <div class="ui form">
    <div class="field">
        <label>What do I need from them/their team?</label>
        <textarea value={formData.q4} type="text" name="q4" placeholder="What are the things I'm asking for?" onChange={handleFormChange}/>
    </div>
  </div>




  <div class="ui form">
    <div class="field">
        <label>What is our communication cadence (communication, meeting frequency)?</label>
        <textarea value={formData.q5} type="text" name="q5" placeholder="Style, frequency, initiator" onChange={handleFormChange}/>
    </div>
  </div>




  <div class="ui form">
    <div class="field">
        <label>Anything in particular I should remember about this person's style of work?</label>
        <textarea value={formData.q6} type="text" name="q6" placeholder="Their preferred commuincation style etc." onChange={handleFormChange}/>
    </div>
  </div>

  
  </div>
<button class="ui green right floated button">Submit</button>

{/* </div> */}

</form>


</>
)
}
export default Stakeholder1Form