import React from "react";

function WorkMotivationsCard( { motivations1, motivations2, motivations3, motivations4, motivations5 } ) {

return (

<div class="ui grid">
    <div class="two wide pink column"></div>
    <div class="twelve wide grey column">
    <div class="column">
    <div class="ui three column grid">
        <div class="teal column">
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

        <div class="orange column">
        <form class="ui form" >    
        <div class="ui form">
            <div class="field">
                <label>List your Work Motivations</label>
                <input value= '' type="text" name="motivations1" placeholder="1"/>
            </div>
            <div class="field">
           
                <input value= '' type="text" name="motivations2" placeholder="2"/>
            </div>
            <div class="field">
       
                <input value= '' type="text" name="motivations3" placeholder="3"/>
            </div>
            <div class="field">
     
                <input value= '' type="text" name="motivations4" placeholder="4"/>
            </div>
            <div class="field">
     
                <input value= '' type="text" name="motivations5" placeholder="5"/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="green column">
            <p>Now, it's time to put it all together. Imagine you feeling at your professional best, energized, living by your personal values, and incorporating any important context. 

What motivates you professionally? Write down each unique motivation - focusing only on your top four for the purposes of this exercise. If you feel you have more, you can always add them afterward. 

Motivations can be anything that gets you excited to come to work and energized for the long haul - from compensation to impact to flexibility to people you work with. The most important aspect of the exercise is to be brutally honest with yourself about what drives you. 

Examples - compensation, impact of work, people - talent, people - social, career growth, title, location, in-office, benefits, flexibility</p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide pink column"></div>
 </div>

)

}

export default WorkMotivationsCard