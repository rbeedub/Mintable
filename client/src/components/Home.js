import React from "react";
import { NavLink } from "react-router-dom"



function Home() {
    return(
<>

<div class="ui grid">

  <div class="three wide column"></div>
  <div class="ten wide column">

  <div class="ui basic segments">
  <div class="ui center aligned segment">
  <div class="ui hidden divider"></div>
    <p>Week 1 Activities</p>
    <div class="ui hidden divider"></div>

  </div>
  <div class="ui horizontal very padded segments">
    <div class="ui basic segment">
    <NavLink to="/reflection">
  <a class="ui card" href="">
      <div class="content">
        <div class="header">Reflection Activity</div>
        <div class="meta">
          <span class="category">Week One</span>
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
        <div class="header">Motivation Map</div>
        <div class="meta">
          <span class="category">Week One</span>
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
        <div class="header">Motivation Exercise</div>
        <div class="meta">
          <span class="category">Week One</span>
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
        <div class="header">Weekly Commit</div>
        <div class="meta">
          <span class="category">Week One</span>
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
        <div class="header">Stakeholder Map</div>
        <div class="meta">
          <span class="category">Week One</span>
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


  <div class="three wide  column"></div>
</div>
<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

<div class="ui grid">
  
  <div class="four column row">
    <div class="left floated  column"></div>
    <div class="right floated  column"></div>
  </div>
  <div class="ui hidden divider"></div>
  <div class="ui hidden divider"></div>

  <div class="row">
  <div class="ui hidden divider"></div>

    <div class="ten wide column">
    <div>
    <div class="ui center aligned segment">

    <h2 class="ui center aligned icon header">
    <i class="yellow star icon"></i>
    <br></br>
      The Five Dimensions of Great Leadership
    </h2>


    <div class="ui internally celled grid">
    <div class="row">
      <div class="three wide column">
        <div class="ui large header">
    <p>Aware</p>
    </div>
    </div>
    <div class="ten wide column">
      <p>Awareness is paying attention. Seeing what might be easy to overlook. Hearing, feeling, sensing, and understanding more carefully</p>
    </div>
    <div class="three wide column">
      <div class="ui huge header">	😀 </div>
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
      <div class="ui huge header">💭</div>
    </div>
    <div class="ten wide column">
    <p>Awareness is paying attention. Seeing what might be easy to overlook. Hearing, feeling, sensing, and understanding more carefully</p>
    </div>
    <div class="three wide column">
    <div class="ui large header" >
    <p>Prepare</p>
    </div>
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
    <div class="ui large header" >
    <p>Care</p>
    </div>
    </div>
    <div class="ten wide column">
      <p>Awareness is paying attention. Seeing what might be easy to overlook. Hearing, feeling, sensing, and understanding more carefully</p>
    </div>
    <div class="three wide column">
    <div class="ui huge header">🤗</div>
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
    <div class="ui huge header">🤲</div>
    </div>
    <div class="ten wide column">
      <p>Awareness is paying attention. Seeing what might be easy to overlook. Hearing, feeling, sensing, and understanding more carefully</p>
    </div>
    <div class="three wide column">
    <div class="ui large header" >
    <p>Share</p>
    </div>
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
    <div class="ui large header" >
    <p>Dare</p>
    </div>
    </div>
    <div class="ten wide column">
      <p>Awareness is paying attention. Seeing what might be easy to overlook. Hearing, feeling, sensing, and understanding more carefully</p>
    </div>
    <div class="three wide column">
    <div class="ui huge header">🧗‍♀️</div>
    </div>
  </div>
</div>
    </div>
    </div>

    </div>
    <div class="three wide column">
  
</div>

  </div>
</div>
</>
    )
}
export default Home;