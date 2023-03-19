import React from "react";

function EnergizedByCard( {energized_by1, energized_by2, energized_by3, energized_by4, energized_by5} ) {

return (

<div class="ui grid">
    <div class="two wide pink column"></div>
    <div class="twelve wide grey column">
    <div class="column">
    <div class="ui three column grid">
        <div class="teal column">
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

        <div class="orange column">
        <form class="ui form" >
        <div class="ui form">
            <div class="field">
                <label>List what energizes you</label>
                <input value= '' type="text" name="personal_values1" placeholder="1"/>
            </div>
            <div class="field">

                <input value= '' type="text" name="personal_values2" placeholder="2"/>
            </div>
            <div class="field">

                <input value= '' type="text" name="personal_values3" placeholder="3"/>
            </div>
            <div class="field">

                <input value= '' type="text" name="personal_values4" placeholder="4"/>
            </div>
            <div class="field">

                <input value= '' type="text" name="personal_values5" placeholder="5"/>
            </div>
            <button class="ui button">Submit</button>
            </div>
            </form>


        </div>
        <div class="green column">
            <p>Things that energize you are what get you up in the morning. They're what fuel you, and you feel like you can get lost in. They're the things you are the most excited to do, and the things you could do for hours without anyone asking you to. </p>
        </div>
    </div>
    </div>
    </div>
    <div class="two wide pink column"></div>
 </div>

)

}

export default EnergizedByCard