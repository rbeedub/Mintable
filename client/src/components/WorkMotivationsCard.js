import React from "react";
import {useState} from "react";

function WorkMotivationsCard( { id, onFormSubmit, motivations1, motivations2, motivations3, motivations4, motivations5 } ) {
   
    const initialData = {
        motivations1:'',
        motivations2:'',
        motivations3:'',
        motivations4:'',
        motivations5:'',
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
        <label>My Work Motivations</label>

            <div class="ui list">
                <div class="item">
                    1 {motivations1}
                </div>
                <br></br>
                <div class="item">
                    2 {motivations2}
                </div>
                <br></br>
                <div class="item">
                    3 {motivations3}
                </div>
                <br></br>
                <div class="item">
                    4 {motivations4}
                </div>
                <br></br>
                <div class="item">
                    5 {motivations5}
                </div>
                <br></br>
                </div>
        </div>

        <div class="column">
        <form class="ui form" onSubmit={handleSubmitForm} >
        <div class="ui form">
            <div class="field">
                <label>List your Work Motivations</label>
                <input value={formData.motivations1} type="text" name="motivations1" placeholder="1" onChange={handleFormChange}/>
            </div>
            <div class="field">
           
                <input value={formData.motivations2} type="text" name="motivations2" placeholder="2" onChange={handleFormChange}/>
            </div>
            <div class="field">
       
                <input value={formData.motivations3} type="text" name="motivations3" placeholder="3" onChange={handleFormChange}/>
            </div>
            <div class="field">
     
                <input value={formData.motivations4} type="text" name="motivations4" placeholder="4" onChange={handleFormChange}/>
            </div>
            <div class="field">
     
                <input value={formData.motivations5} type="text" name="motivations5" placeholder="5" onChange={handleFormChange}/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="column">
            <p>Now, it's time to put it all together. Imagine you feeling at your professional best, energized, living by your personal values, and incorporating any important context. 

What motivates you professionally? Write down each unique motivation - focusing only on your top four for the purposes of this exercise. If you feel you have more, you can always add them afterward. 

Motivations can be anything that gets you excited to come to work and energized for the long haul - from compensation to impact to flexibility to people you work with. The most important aspect of the exercise is to be brutally honest with yourself about what drives you. 

Examples - compensation, impact of work, people - talent, people - social, career growth, title, location, in-office, benefits, flexibility</p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide column"></div>
 </div>

)

}

export default WorkMotivationsCard