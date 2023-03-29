import React from "react";

function MiniMotivCard( { motivations1, motivations2, motivations3, motivations4, motivations5 ,importance, importance2, importance3, importance4, importance5, status, status2, status3, status4, status5} ) {

    console.log(status, status2, status3, status4, status5)


return (
<>
<div class="ui five column grid">
  <div class="column">
    <div class="ui segment">
<div class="ui card">
  <div class="centered content">
    <div class="ui center aligned teal header">"{motivations1}"</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
        <div class="ui mini statistic">
          <div class="value">
          {importance} % 
          </div>
          <div class="label">
            important to you
          </div>
        </div>
        </div>
        <br></br>

        <div class="center aligned content">
       <div class="ui mini statistic">
          <div class="value">
          {status} / 10 
          </div>
          <div class="label">
          on your fulfillment scale
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
    <div class="ui center aligned teal header">"{motivations2}"</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
        <div class="ui mini statistic">
          <div class="value">
          {importance2} % 
          </div>
          <div class="label">
            important to you
          </div>
        </div>
        </div>
        <br></br>

        <div class="center aligned content">
       <div class="ui mini statistic">
          <div class="value">
          {status2} / 10 
          </div>
          <div class="label">
          on your fulfillment scale
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
    <div class="ui center aligned teal header">"{motivations3}"</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
        <div class="ui mini statistic">
          <div class="value">
          {importance3} % 
          </div>
          <div class="label">
            important to you
          </div>
        </div>
        </div>
        <br></br>

        <div class="center aligned content">
       <div class="ui mini statistic">
          <div class="value">
          {status3} / 10 
          </div>
          <div class="label">
          on your fulfillment scale
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
    <div class="ui center aligned teal header">"{motivations4}"</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
        <div class="ui mini statistic">
          <div class="value">
          {importance4} % 
          </div>
          <div class="label">
            important to you
          </div>
        </div>
        </div>
        <br></br>

        <div class="center aligned content">
       <div class="ui mini statistic">
          <div class="value">
          {status4} / 10 
          </div>
          <div class="label">
          on your fulfillment scale
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
    <div class="ui center aligned teal header">"{motivations5}"</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
        <div class="ui mini statistic">
          <div class="value">
          {importance5} % 
          </div>
          <div class="label">
            important to you
          </div>
        </div>
        </div>
        <br></br>

        <div class="center aligned content">
       <div class="ui mini statistic">
          <div class="value">
          {status5} / 10 
          </div>
          <div class="label">
          on your fulfillment scale
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