import React from "react";

function MiniMotivCard( { user, motivations1, importance, status} ) {

    console.log(importance)


return (
<>
<div class="ui card">
  <div class="centered content">
    <div class="ui center aligned header">Motivation 1</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
      <div class="event">
        <div class="content">
        {motivations1}
        </div>
      </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="content">
          {importance} / 10 importance to you
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
</>
)
}

export default MiniMotivCard;