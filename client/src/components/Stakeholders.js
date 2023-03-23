import React from "react";
import StakeholderFormPage from "./StakeholderFormPage";

function Stakeholders( { stakeholderText, user, onStakeholderSubmit }) {

    const stakeholderResponse = stakeholderText.map(stakeholder  => {
        return <StakeholderFormPage key={stakeholder.id} {...stakeholder} user={user} onStakeholderSubmit={onStakeholderSubmit} />
     }
     )
return (
<>

{stakeholderResponse}
</>
)
}

export default Stakeholders;