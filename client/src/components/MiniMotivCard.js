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
    <div class="ui center aligned header">Motivation 1</div>
  </div>
  <div class="uicontent">
    <div class="ui small feed">
        <div class="center aligned content">
          <div class="ui teal header">
          "{motivations1}"
          </div>
       
        </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="center aligned content">
          {importance} % important to you
          </div>
          </div>
        </div>
      </div>
        <div class="center aligned content">
             {status} / 10 on your fulfillment scale
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
        <div class="center aligned content">
        <div class="ui teal header">
        "{motivations2}"
        </div>
        </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="center aligned content">
          {importance2} % important to you
          </div>
          </div>
        </div>
      </div>
        <div class="center aligned content">
  
             {status2} / 10 on your fulfillment scale
         
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
   
        <div class="center aligned content">
        <div class="ui teal header">
        "{motivations3}"
        </div>
        </div>
     
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="center aligned content">
          {importance3} % important to you
          </div>
          </div>
        </div>
      </div>
   
        <div class="center aligned content">
         
             {status3} / 10 on your fulfillment scale
         
     
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
     
        <div class="center aligned content">
        <div class="ui teal header">
        "{motivations4}"
        </div>
        </div>

      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="center aligned content">
          {importance4} % important to you
          </div>
          </div>
        </div>
      </div>
   
        <div class="center aligned content">
   
             {status4} / 10 on your fulfillment scale
       
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
        <div class="center aligned content">
        <div class="ui teal header">
        "{motivations5}"
        </div>
        </div>
      <div class="event">
        <div class="content">
          <div class="summary">
          <div class="center aligned content">
          {importance5} % important to you
          </div>
          </div>
        </div>
      </div>
 
      <div class="center aligned content">
             {status5} / 10 on your fulfillment scale
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