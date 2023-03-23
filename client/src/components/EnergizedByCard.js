import React from "react";
import { useState } from 'react';

function EnergizedByCard( {id, energized_by1, energized_by2, energized_by3, energized_by4, energized_by5, onFormSubmit} ) {

    const initialData = {
        energized_by1:'',
        energized_by2:'',
        energized_by3:'',
        energized_by4:'',
        energized_by5:'',
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
        <label>Things I'm Energized By</label>

            <div class="ui list">
                <div class="item">
                    1 {energized_by1}
                </div>
                <br></br>
                <div class="item">
                    2 {energized_by2}
                </div>
                <br></br>
                <div class="item">
                    3 {energized_by3}
                </div>
                <br></br>
                <div class="item">
                    4 {energized_by4}
                </div>
                <br></br>
                <div class="item">
                    5 {energized_by5}
                </div>
                <br></br>
                </div>
        </div>

        <div class="column">
        <form class="ui form"  onSubmit={handleSubmitForm} >
        <div class="ui form">
            <div class="field">
                <label>List what energizes you</label>
                <input value={formData.energized_by1} type="text" name="energized_by1" placeholder="1" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.energized_by2} type="text" name="energized_by2" placeholder="2" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.energized_by3} type="text" name="energized_by3" placeholder="3" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.energized_by4} type="text" name="energized_by4" placeholder="4" onChange={handleFormChange}/>
            </div>
            <div class="field">

                <input value={formData.energized_by5} type="text" name="energized_by5" placeholder="5" onChange={handleFormChange}/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="column">
            <p>Things that energize you are what get you up in the morning. They're what fuel you, and you feel like you can get lost in. They're the things you are the most excited to do, and the things you could do for hours without anyone asking you to. </p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide column"></div>
 </div>

)

}

export default EnergizedByCard