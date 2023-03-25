import React from "react";
import StakeholderFormPage from "./StakeholderFormPage";

function Stakeholders( { stakeholderText, onStakeholderSubmit }) {

    const stakeholderResponse = stakeholderText.map(stakeholder  => {
        return <StakeholderFormPage key={stakeholder.id} {...stakeholder} onStakeholderSubmit={onStakeholderSubmit} />
     }
     )
return (
<>
<div class="ui relaxed grid">
    <div class="four wide column">
    <img class="ui fluid image" src="./images/directions.svg" />

    </div>
    <div class="twelve wide column">
    <img class="ui fluid image" src="./images/1.svg" />

    </div>
  </div>

{stakeholderResponse}
</>
)
}

export default Stakeholders;