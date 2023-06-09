
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
{/* <div class="ui segments"> */}

<div class="ui segments">
<div class="ui horizontal segment">
<div class="ui segment">
<p>Leaving this session, what will you commit to? By when? What support will you need? Make sure to include a concrete action, a date you'll complete the committed action, and list any support you'll need to get it done.</p>
</div>

<div class="ui segment">
<form class="ui form" onSubmit={handleSubmitForm} >
<div class="ui form">
    <div class="ui form">
        <div class="field">
            <textarea value={formData.quick_commit2} type="text" name="quick_commit2" placeholder={quick_commit2} onChange={handleFormChange}/>
        </div>
        </div>
    <button class="ui button">Submit</button>
    </div>
    </form>



</div>
{/* <div class="ui segment">
    <h3 class="ui header">Your Response</h3>
     <p>{quick_commit2}</p>
</div> */}
</div>
</div>
{/* </div> */}

</>
)
}

export default CommitCard;