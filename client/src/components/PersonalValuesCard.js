import React from "react";
import { useState } from 'react';

function PersonalValuesCard( {id, personal_values1, personal_values2, personal_values3, personal_values4, personal_values5, user, setUser, onFormSubmit } ) {


    console.log(id)

    const initialData = {
        personal_values1:'',
        personal_values2:'',
        personal_values3:'',
        personal_values4:'',
        personal_values5:'',
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
    <div class="two wide pink column"></div>
    <div class="twelve wide grey column">
    <div class="column">
    <div class="ui three column grid">
        <div class="orange column">
        <label>My Personal Values</label>
  
            
            <div class="ui list">
                <div class="item">
                    1 {personal_values1}
                </div>
                <br></br>
                <div class="item">
                    2 {personal_values2}
                </div>
                <br></br>
                <div class="item">
                    3 {personal_values3}
                </div>
                <br></br>
                <div class="item">
                    4 {personal_values4}
                </div>
                <br></br>
                <div class="item">
                    5 {personal_values5}
                </div>
                <br></br>
                </div>
        </div>

        <div class="green column">
        <form class="ui form" onSubmit={handleSubmitForm} >    
        <div class="ui form">
            <div class="field">
                <label>List your Values</label>
                <input value={formData.personal_values1} type="text" name="personal_values1" placeholder="1" onChange={handleFormChange}/>
            </div>
            <div class="field">
           
                <input value={formData.personal_values2} type="text" name="personal_values2" placeholder="2" onChange={handleFormChange}/>
            </div>
            <div class="field">
       
                <input value={formData.personal_values3} type="text" name="personal_values3" placeholder="3" onChange={handleFormChange}/>
            </div>
            <div class="field">
     
                <input value={formData.personal_values4} type="text" name="personal_values4" placeholder="4" onChange={handleFormChange}/>
            </div>
            <div class="field">
     
                <input value={formData.personal_values5} type="text" name="personal_values5" placeholder="5" onChange={handleFormChange}/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="teal column">
            <p>Personal values are guiding principles that motivate you. They inform what you decide and how you act. If you're having trouble identifying your values, consider people you admire- who do you gravitate towards and what qualities do you admire about them? Think of the moments you are most proud of and those you regret - why? These will reveal clues about the things you values the most.  Examples include: Family, security, loyalty, intelligence, connection, creativity, humanity etc </p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide pink column"></div>
 </div>

)

}

export default PersonalValuesCard