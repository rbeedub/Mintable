import React from "react";

function MiniMotivCard( { motivations1, motivations2, motivations3, motivations4, motivations5 ,importance, importance2, importance3, importance4, importance5, status, status2, status3, status4, status5} ) {

    console.log(importance)


return (
<>
<div class="ui five column grid">
  <div class="column">
    <div class="ui segment">
<div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 1</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        " {motivations1} "
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance} % importan to you
          </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             {status} / 10 time and energy you spend dedicated to this
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
  <div class="column">
    <div class="ui segment">

    <div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 2</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        " {motivations2} "
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance2} / 100 importance to you
          </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             {status2} / 10 time and energy you spend dedicated to this
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
  <div class="column">
    <div class="ui segment">
  

<div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 3</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        " {motivations3} "
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance3} / 100 importance to you
          </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             {status3} / 10 time and energy you spend dedicated to this
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
    </div>
  </div>
  <div class="column">
    <div class="ui segment">

    <div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 4</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        " {motivations4} "
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance4} / 100 importance to you
          </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             {status4} / 10 time and energy you spend dedicated to this
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">

    <div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 5</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        " {motivations5} "
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance5} / 100 importance to you
          </div>
          </div>
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
             {status5} / 10 time and energy you spend dedicated to this
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>




</>
)
}

export default MiniMotivCard;