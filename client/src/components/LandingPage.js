import React from "react";
import SignInPage from "./SignInPage";

function LandingPage( {setUser} ) {
return (
<>

<SignInPage
setUser = {setUser} 
/>
</>
)
}

export default LandingPage;