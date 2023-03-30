import React from "react";


function DimensionBehaviors() {
return (
<>
<div class="ui grid">
<div class="one wide column"></div>
<div class="fourteen wide column">
<div class="ui raised segment">
  <p>
  Perhaps one of the best tools you can use with this framework is the Indicators Chart. This chart organizes behaviors associated with each dimension across three "goldilocks" categories: Not enough, Just right, and Too much. Using this chart, you'll be able to better understand how you show up on both good and bad days as a manager.
  </p>
  <p>Review each leadership dimension below. Pay attention to the behaviors that sound like you when you're at your best, and when you're not. Find the dimension that you feel the most confident in, and the one that you feel like needs the most work. Once you've identified the areas that you'd like to invest in, reflect on them in the section below.</p> 
</div>

<table class="ui very basic table">
  <thead>
    {/* <tr>
      <th>Leadership Dimension</th>
      <th>Not Enough</th>
      <th>Just Right</th>
      <th>Too Much</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
      <td><img class="ui fluid image" src="./images/AwareHeader.svg"/></td>
      <td><img class="ui fluid image" src="./images/AwareNE.svg"/></td>
      <td><img class="ui fluid image" src="./images/AwareJR.svg"/></td>
      <td><img class="ui fluid image" src="./images/AwareTM.svg"/></td>
    </tr>
    <tr>
      <td><img class="ui fluid image" src="./images/CareHeader.svg"/></td>
      <td><img class="ui fluid image" src="./images/CareNE.svg"/></td>
      <td><img class="ui fluid image" src="./images/CareJR.svg"/></td>
      <td><img class="ui fluid image" src="./images/CareTM.svg"/></td>
    </tr>
    <tr>
      <td><img class="ui fluid image" src="./images/PrepareHeader.svg"/></td>
      <td><img class="ui fluid image" src="./images/PrepareNE.svg"/></td>
      <td><img class="ui fluid image" src="./images/PrepareJR.svg"/></td>
      <td><img class="ui fluid image" src="./images/PrepareTM.svg"/></td>
    </tr>
    <tr>
      <td><img class="ui fluid image" src="./images/ShareHeader.svg"/></td>
      <td><img class="ui fluid image" src="./images/ShearNE.svg"/></td>
      <td><img class="ui fluid image" src="./images/ShareJR.svg"/></td>
      <td><img class="ui fluid image" src="./images/ShareTM.svg"/></td>
    </tr>
    <tr>
      <td><img class="ui fluid image" src="./images/DareHeader.svg"/></td>
      <td><img class="ui fluid image" src="./images/DarNE.svg"/></td>
      <td><img class="ui fluid image" src="./images/DareJR.svg"/></td>
      <td><img class="ui fluid image" src="./images/DareTM.svg"/></td>
    </tr>
  </tbody>
</table>




</div>
<div class="one column"></div>


</div>

</>
)
}

export default DimensionBehaviors;