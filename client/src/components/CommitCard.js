
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
<div class="ui horizontal segment">
<div class="ui segment">
    <p>How will you ensure your manager has visibility into your motivations?</p>

</div>
<div class="ui segment">
<form class="ui form" onSubmit={handleSubmitForm} >
<div class="ui form">
    <div class="ui form">
        <div class="field">
            <textarea value={formData.quick_commit1} type="text" name="quick_commit1" placeholder={quick_commit1} onChange={handleFormChange}/>
        </div>
        </div>
    <button class="ui button">Submit</button>
    </div>
    </form>


</div>

</div>
</div>


</>
)
}

export default CommitCard;