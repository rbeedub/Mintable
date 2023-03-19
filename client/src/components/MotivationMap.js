import React from "react";
import PersonalValuesCard from "./PersonalValuesCard";
import EnergizedByCard from "./EnergizedByCard";
import DrainedByCard from "./DrainedByCard";
import ContextCard from "./ContextCard";
import WorkMotivationsCard from "./WorkMotivationsCard";

function MotivationMap( {user, setUser, onFormSubmit, motivationList, setMotivationList} ) {


console.log(motivationList)


   const motivationResponse = motivationList.map(motivation  => {
      return <PersonalValuesCard key={motivation.id} {...motivation} user={user} setUser={setUser} onFormSubmit={onFormSubmit}  />
   }
   )

   const energizedByResponse = user?.motivations.map(motivation  => {
      return <EnergizedByCard key={motivation.id} {...motivation} user={user} />
   }
   )
   const drainedByResponse = user?.motivations.map(motivation  => {
      return <DrainedByCard key={motivation.id} {...motivation} user={user} />
   }
   )
   const contextResponse = user?.motivations.map(motivation  => {
      return <ContextCard key={motivation.id} {...motivation} user={user} />
   }
   )
   const motivationsResponse = user?.motivations.map(motivation  => {
      return <WorkMotivationsCard key={motivation.id} {...motivation} user={user} />
   }
   )

return (
<>
{motivationResponse}
{energizedByResponse}
{drainedByResponse}
{contextResponse} 
{motivationsResponse} 

</>
)
}

export default MotivationMap;