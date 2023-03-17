import React from "react";


function ReflectionCard({user}) {

    console.log(user)

return (
<>
<div class="ui basic segment">
   <p>{user.name}, which dimension resonates the most with you?</p>
   <form value="" class="ui reply form">
   <div class="field">
   <textarea></textarea>
   </div>
   <div class="ui blue labeled submit icon button">
   <i class="icon edit"></i> Add Answer
   </div>
</form>
</div>

<div class="ui basic segment">
<p>Which dimension do you want to develop?</p>
   <form value="" class="ui reply form">
   <div class="field">
   <textarea></textarea>
   </div>
   <div class="ui blue labeled submit icon button">
   <i class="icon edit"></i> Add Answer
   </div>
</form>
</div>


</>
)
}

export default ReflectionCard;