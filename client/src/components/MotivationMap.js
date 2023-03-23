import React from "react";
import PersonalValuesCard from "./PersonalValuesCard";
import EnergizedByCard from "./EnergizedByCard";
import DrainedByCard from "./DrainedByCard";
import ContextCard from "./ContextCard";
import WorkMotivationsCard from "./WorkMotivationsCard";




function MotivationMap( {onFormSubmit, motivationList, setMotivationList} ) {
 


console.log(motivationList)


   const motivationResponse = motivationList.map(motivation  => {
      return <PersonalValuesCard key={motivation.id} {...motivation} onFormSubmit={onFormSubmit}  />
   }
   )

   const energizedByResponse = motivationList.map(motivation  => {
      return <EnergizedByCard key={motivation.id} {...motivation} onFormSubmit={onFormSubmit} />
   }
   )
   const drainedByResponse = motivationList.map(motivation  => {
      return <DrainedByCard key={motivation.id} {...motivation} onFormSubmit={onFormSubmit} />
   }
   )
   const contextResponse = motivationList.map(motivation  => {
      return <ContextCard key={motivation.id} {...motivation} onFormSubmit={onFormSubmit} />
   }
   )
   const motivationsResponse = motivationList.map(motivation  => {
      return <WorkMotivationsCard key={motivation.id} {...motivation} onFormSubmit={onFormSubmit} />
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