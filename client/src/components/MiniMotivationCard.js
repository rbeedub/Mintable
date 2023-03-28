import React from "react"

function MiniMotivationCard( { motivations1, motivations2, motivations3, motivations4, motivations5 } ) {


return(
    <>
    <div clas="ui raised segment">
    <div class="ui list">
        {/* <div class="ui header"> My Motivations</div> */}
        <img class="ui flex image" src="./images/WorkMotivations.svg" alt="My work motivations" />
            <div class="item">
                    1. {motivations1}
                </div>
                <br></br>
                <div class="item">
                    2. {motivations2}
                </div>
                <br></br>
                <div class="item">
                    3. {motivations3}
                </div>
                <br></br>
                <div class="item">
                    4. {motivations4}
                </div>
                <br></br>
                <div class="item">
                    5. {motivations5}
                </div>
     
                </div>
    </div>

    </>

    )
}

export default MiniMotivationCard