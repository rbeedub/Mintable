import React from 'react';

function StakeholdersTable({ id, q1, q2, q3, q4, q5, q6, s2q1, s2q2, s2q3, s2q4, s2q5, s2q6, s3q1, s3q2, s3q3, s3q4, s3q5, s3q6, s4q1, s4q2, s4q3, s4q4, s4q5, s4q6 }) {

return(
  <>

<br></br>
<table class="ui very basic collapsing table">
    <thead>
      <tr><th>Name of the Team or Person </th>
      <th>Shared Goals or Outcomes</th>
      <th>Their Definition of Success</th> 
      <th>What I Need From Them</th>
      <th>Our Communication Cadence</th>
      <th>Their Style of Work</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>{q1}</td>
        <td>{q2}</td>
        <td>{q3}</td>
        <td>{q4}</td>
        <td>{q5}</td>
        <td>{q6}</td>
      </tr>
      <tr>
        <td>{s2q1}</td>
        <td>{s2q2}</td>
        <td>{s2q3}</td>
        <td>{s2q4}</td>
        <td>{s2q5}</td>
        <td>{s2q6}</td>
      </tr>
      <tr>
        <td>{s3q1}</td>
        <td>{s3q2}</td>
        <td>{s3q3}</td>
        <td>{s3q4}</td>
        <td>{s3q5}</td>
        <td>{s3q6}</td>
      </tr>
      <tr>
        <td>{s4q1}</td>
        <td>{s4q2}</td>
        <td>{s4q3}</td>
        <td>{s4q4}</td>
        <td>{s4q5}</td>
        <td>{s4q6}</td>
      </tr>
    </tbody>
  </table>
  </>

)
}
export default StakeholdersTable

