import React from "react";
import EditProfileForm from "./EditProfileForm";

function EditProfile( { user, setUser} ) {
return (
<>
<EditProfileForm
user={user}
setUser={setUser}
/>
</>
)
}

export default EditProfile;