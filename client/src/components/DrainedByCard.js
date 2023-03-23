import React from "react";
import { useState } from 'react';

function DrainedBy( {id, drained_by1, drained_by2, drained_by3, drained_by4, drained_by5, onFormSubmit } ) {

    const initialData = {
        drained_by1:'',
        drained_by2:'',
        drained_by3:'',
        drained_by4:'',
        drained_by5:'',
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
        <div class=" column">
        <label>Things I'm Drained By</label>

            <div class="ui list">
                <div class="item">
                    1 {drained_by1}
                </div>
                <br></br>
                <div class="item">
                    2 {drained_by2}
                </div>
                <br></br>
                <div class="item">
                    3 {drained_by3}
                </div>
                <br></br>
                <div class="item">
                    4 {drained_by4}
                </div>
                <br></br>
                <div class="item">
                    5 {drained_by5}
                </div>
                <br></br>
                </div>
        </div>

        <div class="column">
        <form class="ui form" onSubmit={handleSubmitForm} >
        <div class="ui form">
            <div class="field">
                <label>List what drains you</label>
                <input value={formData.drained_by1} type="text" name="drained_by1" placeholder="1" onChange={handleFormChange} />
            </div>
            <div class="field">

                <input value={formData.drained_by2} type="text" name="drained_by2" placeholder="2" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.drained_by3} type="text" name="drained_by3" placeholder="3" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.drained_by4} type="text" name="drained_by4" placeholder="4" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.drained_by5} type="text" name="drained_by5" placeholder="5" onChange={handleFormChange}/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="column">
            <p>Things that drain you are the things you avoid. The stuff that you really don't like to do. The stuff that makes you want to poke yourself in the eyeballs. </p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide column"></div>
 </div>

)

}

export default DrainedBy