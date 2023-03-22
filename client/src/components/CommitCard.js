
import React from "react";
import {useState} from "react"


function CommitCard( {id, quick_commit1, onCommitSubmit} ) {

    const initialData = {
        quick_commit1:'',

        }

const [formData, setFormData] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    console.log(e.target.value)
    setFormData({...formData, [name]: value})
    }


function handleSubmitForm(e) {
    e.preventDefault()

    fetch(`/commits/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then(onCommitSubmit)
    .then(setFormData(initialData))
}


return (

<>
<div class="ui segments">
<div class="ui segment">
<p>Weekly Quick Commit</p>
</div>
<div class="ui segments">
<div class="ui horizontal segments">
<div class="ui segment">
    <p>How will you ensure your manager has visibility into your motivations?</p>


{/* <h3 class="ui header">How will you ensure your manager has visibility into your motivations?</h3>
<br></br>
<h3>When/how will you share this with them?</h3> */}



</div>
<div class="ui segment">
<form class="ui form" onSubmit={handleSubmitForm} >
<div class="ui form">
    <div class="ui form">
        <div class="field">
            <textarea value={formData.quick_commit1} type="text" name="quick_commit1" placeholder="Your commitment" onChange={handleFormChange}/>
        </div>
        </div>
    <button class="ui button">Submit</button>
    </div>
    </form>


</div>
<div class="ui segment">
    <h3 class="ui header">Your Response</h3>
    <p>{quick_commit1}</p>
</div>
</div>
</div>
</div>

</>
)
}

export default CommitCard;