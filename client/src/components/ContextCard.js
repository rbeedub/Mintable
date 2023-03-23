import React from "react";
import { useState } from 'react';


function ContextCard( { id, context, onFormSubmit } ) {

    const initialData = {
        context:'',
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

<div class="ui grid">
    <div class="two wide column"></div>
    <div class="twelve wide column">
    <div class="column">
    <div class="ui three column grid">
        <div class="column">
        <label>My Context</label>

            <div class="ui list">
                <div class="item">
                   {context}
                </div>
        </div>
        </div>

        <div class="column">
        <form class="ui form" onSubmit={handleSubmitForm}>
        <div class="ui form">
            {/* <div class="field">
                <label>What is your context?</label>
                <input value= '' type="text" name="context" placeholder="Your context"/>
            </div> */}
            <div class="ui form">
                <div class="field">
                    <label>My context is...</label>
                    <textarea value={formData.context} type="text" name="context" placeholder="Your context" onChange={handleFormChange}/>
                </div>
                </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="column">
            <p>Are there any extrinsic factors or unique considerations in your life that affect how you're thinking about your work right now? For example, "I need to live abroad for a partner" or "I have a sick parent and need to work part-time" or "I have kids and want to work-from-home" or "I'm trying to buy a house to compensation is very important". It's important to label these, whether you act on them or not.</p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide column"></div>
 </div>

)

}

export default ContextCard
