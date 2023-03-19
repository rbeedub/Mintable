import React from "react";

function ContextCard( {context} ) {

return (

<div class="ui grid">
    <div class="two wide pink column"></div>
    <div class="twelve wide grey column">
    <div class="column">
    <div class="ui three column grid">
        <div class="orange column">
        <label>My Context</label>

            <div class="ui list">
                <div class="item">
                   {context}
                </div>
        </div>
        </div>

        <div class="green column">
        <form class="ui form" >
        <div class="ui form">
            <div class="field">
                <label>What is your context?</label>
                <input value= '' type="text" name="context" placeholder="Your context"/>
            </div>
    
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="teal column">
            <p>Are there any extrinsic factors or unique considerations in your life that affect how you're thinking about your work right now? For example, "I need to live abroad for a partner" or "I have a sick parent and need to work part-time" or "I have kids and want to work-from-home" or "I'm trying to buy a house to compensation is very important". It's important to label these, whether you act on them or not.</p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide pink column"></div>
 </div>

)

}

export default ContextCard
