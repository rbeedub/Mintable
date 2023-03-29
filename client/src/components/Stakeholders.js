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

<div class="ui grid">
<div class="one wide  column"></div>
<div class="fourteen wide column">

<div class="ui header"> Who are your stakeholders?</div>
<br></br>
<p>When you become a manager, you actually start managing more than just your direct reports. You now have a number of relationships to manage in all directions - up, down, and around.

We call the cast of characters in your expanding ecosystem - stakeholders. This is the full set of individuals you rely on and who rely on you to achieve success.</p> <p> Now that you’re a people manager, the same individuals in your organization will have new expectations of you.

Often, new people managers are thrown into the role without anyone specifically addressing this concept; stakeholders are implied (“I assumed you knew to engage [insert leader of team]”).</p>

<p>We recommend creating and maintaining a stakeholder map. A stakeholder map is pretty much what it sounds like: a map of all the people who matter to the success of you and your team. If you share a goal with someone, they should go on your map. Review the directions below, and create your stakeholder map, taking special note of the places where you feel uncertain, or don't have the answers as you'll want to revisit these areas with your stakeholders to realign and clarify.</p>


</div>
<div class="one wide column"></div>


</div>
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