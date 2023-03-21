
import React from "react";
import {useState} from "react"


function CommitCard( {id, quick_commit2, onCommitSubmit} ) {

    const initialData = {
        quick_commit2:'',
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

<div class="ui segments">
<div class="ui horizontal segments">
<div class="ui segment">
<p>How could you use this exercise with your team?</p>
</div>

<div class="ui segment">
<form class="ui form" onSubmit={handleSubmitForm} >
<div class="ui form">
    <div class="ui form">
        <div class="field">
            <textarea value={formData.quick_commit2} type="text" name="quick_commit2" placeholder="Your commitment" onChange={handleFormChange}/>
        </div>
        </div>
    <button class="ui button">Submit</button>
    </div>
    </form>



</div>
<div class="ui segment">
    <h3 class="ui header">Your Response</h3>
     <p>{quick_commit2}</p>
</div>
</div>
</div>
</div>

</>
)
}

export default CommitCard;