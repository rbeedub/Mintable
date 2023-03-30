import React from "react";
import { NavLink } from "react-router-dom"
import Activities from "./Activities";



function Home() {
    return(
<>
<div>

<div class="ui grid">
<div class="sixteen wide column">


<img class="ui top aligned fluid image" src="/images/HomeBanner.svg"/>

</div>

</div>
</div>


<div class="ui grid">
<div class="one wide column"></div>
<div class="fourteen wide column">

<br></br>

<p>Whether you are about to become, you’ve just become, or you’ve been a manager for a bit, it is important to recognize what's different about this role. 
Here at the Mintable we've found that the best managers are able to identify their strengths and understand their gaps. When they have a clear picture of themselves, they can lean into what they are good at and call in the right resources where needed. We will first spend time covering what’s changed for you and how to navigate it. </p>
<img class="ui medium right floated image" src="./images/image1.svg"/>

 {/* <p> When they have a clear picture of themselves, they can lean into what they are good at and call in the right resources where needed. We will first spend time covering what’s changed for you and how to navigate it. </p> */}

 <p>
 Being a manager is a role that requires you to change how you think, act, and grow. We consider becoming a people manager to be starting over in a completely new role. As a result, you likely go from knowing to growing.  It can be daunting to learn and change how you work in front of the captive audience that is comprised of your team and peers. </p> 
 <br></br>
 <p> You might mourn the loss of your old role - the easy wins, the comfort, the credibility and the expertise you built up. Or you may navigate the challenge of performing as an individual contributor while also serving as a people manager.

 </p>
 <p>
  During each weekly session you'll have activities to complete to help guide you through the concpets of great management. These activities are meant to be completed live, during your in person, facilitated session. The Mintable wants to give you the tools and resources to be successful, and also the roadmap to get there. </p> <br></br> <p> Each of these activities has been crafted for you to reflect on your experiences, and think critically about the changes you'd like to make in the immediate future. You can return to your answers here at any time. 
</p>
<br></br>
<br></br>
< NavLink to="/activities"> <div class="ui bottom attached purple button" tabindex="0">Start Week One Activities</div> </NavLink>
<br></br>
<br></br>
</div>

</div>



</>
    )
}
export default Home;