import React from "react";
import { NavLink } from "react-router-dom"



function Home() {
    return(
<>
<div class="ui grid">
<div class="one wide column"></div>
<div class="fourteen wide column">

<div class="ui large header">Welcome to The Mintable</div>
<br></br>

<p>Whether you are about to become, you’ve just become, or you’ve been a manager for a bit, it is important to recognize what's different about this role. 
Here at the Mintable we've found that the best managers are able to identify their strengths and understand their gaps.</p>
<img class="ui medium right floated image" src="./images/image1.svg"/>
<br></br>
 <p> When they have a clear picture of themselves, they can lean into what they are good at and call in the right resources where needed. We will first spend time covering what’s changed for you and how to navigate it. </p>
 <br></br>
 <p>
 Being a manager is a role that requires you to change how you think, act, and grow. We consider becoming a people manager to be starting over in a completely new role. As a result, you likely go from knowing to growing.  It can be daunting to learn and change how you work in front of the captive audience that is comprised of your team and peers. </p> 
 <br></br>
 <p> You might mourn the loss of your old role - the easy wins, the comfort, the credibility and the expertise you built up. Or you may navigate the challenge of performing as an individual contributor while also serving as a people manager.

 </p>
</div>
<div class="one wide column"></div>
</div>

<div class="ui grid">
<div class="one wide column"></div>

  <div class="ten wide column">

  <div class="ui basic segments">
  <div class="ui center aligned segment">
  <div class="ui hidden divider"></div>
  <img class="ui fluid image" src="./images/w1banner.svg" alt="Week One Banner"/>
    <div class="ui hidden divider"></div>
  </div>
  <div class="ui horizontal very padded segments">
    <div class="ui basic segment">
    <NavLink to="/reflection">
  <a class="ui card" href="">
      <div class="content">
        <img class="ui fluid image" src="./images/ReflectionActivity.svg" alt="Reflection Activity"/>
        {/* <div class="header">Reflection Activity</div> */}
        <div class="meta">
          {/* <span class="category">Week One</span> */}
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
        ⏱️ 2 minutes
        </div>
      </div>
    </a>
    </NavLink>
    </div>
    <div class="ui basic segment">
    <NavLink to="/motivation">
      <a class="ui card" href="">
      <div class="content">
      <img class="ui fluid image" src="./images/motivationmap.svg" alt="motivation map"/>
        {/* <div class="header">Motivation Map</div> */}
        <div class="meta">
          {/* <span class="category">Week One</span> */}
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
        ⏱️ 3 minutes
        </div>
      </div>
    </a>
    </NavLink>
    </div>
    <div class="ui basic segment">
    <NavLink to="/drill">
  <a class="ui card" href="">
      <div class="content">
      <img class="ui fluid image" src="./images/motivationExercise.svg" alt="motivation exercise"/>
        {/* <div class="header">Motivation Exercise</div> */}
        <div class="meta">
          {/* <span class="category">Week One</span> */}
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
        ⏱️ 5 minutes
        </div>
      </div>
    </a>
    </NavLink>
    </div>
    <div class="ui basic segment">
    <NavLink to="/commit">
      <a class="ui card" href="">
      <div class="content">
      <img class="ui fluid image" src="./images/weeklycommit.svg" alt="weekly commit"/>
        {/* <div class="header">Weekly Commit</div> */}
        <div class="meta">
          {/* <span class="category">Week One</span> */}
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
        ⏱️ 5 minutes
        </div>
      </div>
    </a>
    </NavLink>
</div>
<div class="ui basic segment">
    <NavLink to="/stakeholders">
      <a class="ui card" href="">
      <div class="content">
      <img class="ui fluid image" src="./images/stakeholdermap.svg" alt="Stakeholder Map"/>
      {/* <div class="header">Stakeholder Map</div> */}
        <div class="meta">
          {/* <span class="category">Week One</span> */}
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
      <div class="extra content">
        <div class="right floated author">
        ⏱️ 5 minutes
        </div>
      </div>
    </a>
    </NavLink>
</div>
</div>
</div>
</div>

<div class="three wide column">
<br></br>
<p>
  During each weekly session you'll have activities to complete to help guide you through the concpets of great management. These activities are meant to be completed live, during your in person, facilitated session. The Mintable wants to give you the tools and resources to be successful, and also the roadmap to get there. </p> <br></br> <p> Each of these activities has been crafted for you to reflect on your experiences, and think critically about the changes you'd like to make in the immediate future. You can return to your answers here at any time. 
</p>

</div>

  <div class="one wide column"></div>
</div>
<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

</>
    )
}
export default Home;