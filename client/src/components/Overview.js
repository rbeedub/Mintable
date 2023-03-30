import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { NavLink } from "react-router-dom";
import MotivationResponseCards from './MotivationResponseCards';
import StakeholdersTable from './StakeholdersTable';

function Overview( {motivationList, exerciseList} ) {
    const [user, setUser] = useContext(UserContext)




    return(

<>
<div>

<div class="ui grid">
<div class="sixteen wide column">
< NavLink to="/"> 
<img class="ui top aligned fluid image" src="/images/OverviewBanner.svg"/>
</NavLink>
</div>

</div>
</div>

        
    <div class="ui grid">
         <div class="four wide  column">
         <div class="ui centered card">
            <div class="ui small centered header">About Me</div>
                        <div class="image">
                            <img src={user.photo}/>
                        </div>
                        <div class="content">
                            <a class="header">{user.name}</a>
                            <div class="meta">
                            <span class="date"> Username: {user.username}</span>
                            <br></br>
                            <span class="date"> Company: {user.company}</span>
                            <br></br>
                            <span class="date"> Email: {user.email}</span>
                            </div>
                            <div class="description">
                            About me: "{user.bio}""
                            </div>
                        </div>
                        </div>
            </div>        
            <div class="six wide column">

            <div class="ui raised segment">
            <div class="ui small header">Your commitment for the week:</div>
            <br></br>
            {user.commits[0].quick_commit2}
            </div>
            <div class="ui basic horizontal segments">
                    <div class="ui basic segment">
                    <div class="ui small header">My personal values...</div>
                        <p> 1.  {user.motivations[0].personal_values1} </p>
                        <p> 2.  {user.motivations[0].personal_values2} </p>
                        <p> 3.  {user.motivations[0].personal_values3} </p>
                        <p> 4.  {user.motivations[0].personal_values4} </p>
                        <p> 5.  {user.motivations[0].personal_values5} </p>
                    </div>
                    <div class="ui basic segment">
                    <div class="ui small header">I'm energized by...</div>
                    <p> 1.  {user.motivations[0].energized_by1} </p>
                    <p> 2.  {user.motivations[0].energized_by2} </p>
                    <p> 3.  {user.motivations[0].energized_by3} </p>
                    <p> 4.  {user.motivations[0].energized_by4} </p>
                    <p> 5.  {user.motivations[0].energized_by5} </p>
                    </div>
                    <div class="ui basic segment">
                    <div class="ui small header">I'm drained by...</div>
                    <p> 1.  {user.motivations[0].drained_by1} </p>
                    <p> 2.  {user.motivations[0].drained_by2} </p>
                    <p> 3.  {user.motivations[0].drained_by3} </p>
                    <p> 4.  {user.motivations[0].drained_by4} </p>
                    <p> 5.  {user.motivations[0].drained_by5} </p>

                    </div>
                    </div>
            </div>
            <div class="six wide column">
                <div class="ui centered basic segment">
            <div class="ui segments">
            <div class="ui segment">
            <div class="ui small header">Week One Reflections on the Leadership Dimensions</div>
            </div>
            <div class="ui segments">
                <div class="ui segment">
                <div dangerouslySetInnerHTML={{__html:user.reflections[0].notes}} />
                </div>
            </div>
            </div>

            </div>
            </div>
  

    </div>
    <div class="ui basic segment">
    <div class="ui grid">

    <div class="one wide column"></div>
    <div class="fourteen wide column">
           <MotivationResponseCards
   motivationList={motivationList}
   exerciseList={exerciseList}

   />
         <div class="one wide column"></div>
    </div>
    </div>





    </div>
    <div class="ui grid">
        <div class="one wide column"></div>
        <div class="fourteen wide column">
        <br></br>
   <div class="ui raised center aligned segment">
   <div class="ui medium header"> Use your stakeholder map as a guide to navigate areas where you can align with your stakeholders, clarify uncertanties and strengthen your relationship: </div>

    <div>

        <StakeholdersTable
        q1={user.stakeholders[0].q1} 
        q2={user.stakeholders[0].q2}
        q3={user.stakeholders[0].q3}
        q4={user.stakeholders[0].q4}
        q5={user.stakeholders[0].q5}
        q6={user.stakeholders[0].q6}
        s2q1={user.stakeholders[0].s2q1}
        s2q2={user.stakeholders[0].s2q2}
        s2q3={user.stakeholders[0].s2q3}
        s2q4={user.stakeholders[0].s2q4}
        s2q5={user.stakeholders[0].s2q5}
        s2q6={user.stakeholders[0].s2q6}
        s3q1={user.stakeholders[0].s3q1}
        s3q2={user.stakeholders[0].s3q2}
        s3q3={user.stakeholders[0].s3q3}
        s3q4={user.stakeholders[0].s3q4}
        s3q5={user.stakeholders[0].s3q5}
        s3q6={user.stakeholders[0].s3q6}
        s4q1={user.stakeholders[0].s4q1}
        s4q2={user.stakeholders[0].s4q2}
        s4q3={user.stakeholders[0].s4q3}
        s4q4={user.stakeholders[0].s4q4}
        s4q5={user.stakeholders[0].s4q5}
        s4q6={user.stakeholders[0].s4q6}



         />
         </div>
    </div>


        </div>

        <div class="one wide column"></div>

    </div>
    <div class="ui grid">

<div class="two wide column">
    < NavLink to="/stakeholders"> <button class="ui labeled icon button">
    <i class="left chevron icon"></i>
    Back
  </button> </NavLink>

    </div>

    <div class="twelve wide column"></div>

    <div class="two wide column">
    < NavLink to="/">   <button class="ui right labeled icon button">
    Home
    <i class="home icon"></i>
  </button></NavLink>

    </div>

</div>
    </>
    )
}
export default Overview