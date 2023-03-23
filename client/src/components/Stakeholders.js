import React from "react";
import StakeholderFormPage from "./StakeholderFormPage";

function Stakeholders( { stakeholderText, onStakeholderSubmit }) {

    const stakeholderResponse = stakeholderText.map(stakeholder  => {
        return <StakeholderFormPage key={stakeholder.id} {...stakeholder} onStakeholderSubmit={onStakeholderSubmit} />
     }
     )
return (
<>

{stakeholderResponse}
</>
)
}

export default Stakeholders;