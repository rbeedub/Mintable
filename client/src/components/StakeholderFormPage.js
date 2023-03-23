import React, { useState }  from "react";
import Stakeholder1Form from "./Stakeholder1Form";
import Stakeholder2Form from "./Stakeholder2Form";
import Stakeholder3Form from "./Stakeholder2Form";
import Stakeholder4Form from "./Stakeholder2Form";
import StakeholdersTable from "./StakeholdersTable";





function StakeholderFormPage( { id, onStakeholderSubmit, q1, q2, q3, q4, q5, q6, s2q1, s2q2, s2q3, s2q4, s2q5, s2q6, s3q1, s3q2, s3q3, s3q4, s3q5, s3q6, s4q1, s4q2, s4q3, s4q4, s4q5, s4q6 } ) {

    const [showS1Btn, setShowS1Btn] = useState(true);
    const [showS2Btn, setShowS2Btn] = useState(true);
    const [showS3Btn, setShowS3Btn] = useState(true);
    const [showS4Btn, setShowS4Btn] = useState(true);


return (

<>

<div class="ui grid">
  <div class="one wide column"></div>
  <div class="four wide column">
  <div>
{showS1Btn ?

<>

<button class="ui button" onClick={() => setShowS1Btn(!showS1Btn)}> Stakeholder One</button>
</>

:
<>
        <Stakeholder1Form
            id={id}
            onStakeholderSubmit={onStakeholderSubmit}
            q1={q1}
            q2={q2}
            q3={q3}
            q4={q4}
            q5={q5}
            q6={q6}
            />
    <button class="ui  button" onClick={() => setShowS1Btn(!showS1Btn)}> Close </button>
</>
}
</div>


<br></br>
<div>
{showS2Btn ?

<>

<button class="ui button" onClick={() => setShowS2Btn(!showS2Btn)}> Stakeholder Two</button>
</>


: <>

<>
        <Stakeholder2Form
            id={id}
            onStakeholderSubmit={onStakeholderSubmit}
            s2q1={s2q1}
            s2q2={s2q2}
            s2q3={s2q3}
            s2q4={s2q4}
            s2q5={s2q5}
            s2q6={s2q6}
            />
    <button class="ui  button" onClick={() => setShowS2Btn(!showS2Btn)}> Close </button>
</>
</>

}
</div>

<br></br>
<div>
{showS3Btn ?

<>

<button class="ui button" onClick={() => setShowS3Btn(!showS3Btn)}> Stakeholder Three</button>
</>


: <>

<>
        <Stakeholder3Form
            id={id}
            onStakeholderSubmit={onStakeholderSubmit}
            s3q1={s3q1}
            s3q2={s3q2}
            s3q3={s3q3}
            s3q4={s3q4}
            s3q5={s3q5}
            s3q6={s3q6}
            />
    <button class="ui  button" onClick={() => setShowS3Btn(!showS3Btn)}> Close </button>
</>
</>

}
</div>
<br></br>
<div>
{showS4Btn ?

<>

<button class="ui button" onClick={() => setShowS4Btn(!showS4Btn)}> Stakeholder Four</button>
</>


: <>

<>
        <Stakeholder4Form
            id={id}
            onStakeholderSubmit={onStakeholderSubmit}
            s4q1={s4q1}
            s4q2={s4q2}
            s4q3={s4q3}
            s4q4={s4q4}
            s4q5={s4q5}
            s4q6={s4q6}
            />
    <button class="ui  button" onClick={() => setShowS4Btn(!showS4Btn)}> Close </button>
</>
</>

}
</div>


  </div>

  <div class="nine wide  column">

<StakeholdersTable
        id={id}
        q1={q1}
        q2={q2}
        q3={q3}
        q4={q4}
        q5={q5}
        q6={q6}
        s2q1={s2q1}
        s2q2={s2q2}
        s2q3={s2q3}
        s2q4={s2q4}
        s2q5={s2q5}
        s2q6={s2q6}
        s3q1={s3q1}
        s3q2={s3q2}
        s3q3={s3q3}
        s3q4={s3q4}
        s3q5={s3q5}
        s3q6={s3q6}
        s4q1={s4q1}
        s4q2={s4q2}
        s4q3={s4q3}
        s4q4={s4q4}
        s4q5={s4q5}
        s4q6={s4q6}
/>

  </div>
  <div class="one wide  column"></div>
</div>



    </>
    )
}


export default StakeholderFormPage;