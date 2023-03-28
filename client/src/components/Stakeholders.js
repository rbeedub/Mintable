import React from "react";
import StakeholderFormPage from "./StakeholderFormPage";
import { NavLink } from "react-router-dom";

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
    {/* <img class="ui fluid image" src="./images/1.svg" /> */}
    {stakeholderResponse}
    </div>
  </div>

{/* {stakeholderResponse} */}

<div class="ui grid">

<div class="two wide column">
      < NavLink to="/commit"> <button class="ui tiny button"> Previous Activity</button></NavLink>

      </div>

      <div class="twelve wide column"></div>

      <div class="two wide column">
      < NavLink to="/"> <button class="ui tiny purple button"> Home</button></NavLink>

      </div>

   </div>

</>
)
}

export default Stakeholders;