import React from 'react';
import { NavLink } from "react-router-dom"


function Activities() {

return(
<>
<div class="ui grid">
<div class="one wide column"></div>

<div class="fourteen wide column">

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
<br></br>
< NavLink to="/overview"> <div class="ui bottom attached button" tabindex="0">Week One Overview</div> </NavLink>
<br></br>
</div>
</div>
<div class="one wide column"></div>
</div>
</>
    )
}

export default Activities;
