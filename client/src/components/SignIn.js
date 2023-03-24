import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";

function SignIn({ setErrors }) {

        const initialData = {
            name:'',
            email:'',
            password: '',
        }

const [formData, setFormdata] = useState(initialData)
const [user, setUser] = useContext(UserContext)

const navigate = useNavigate()


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

function handleSubmit(e) {
e.preventDefault();
setIsLoading(true);
fetch("/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
}).then((r) => {
    setIsLoading(false);
    if (r.ok) {
    r.json().then((user) => setUser(user)).then(()=>navigate('/'));
    } else {
    r.json().then((err) => setErrors(err.errors));
    }
});
}


return (

<div class="ui equal width grid">
<div class="column">
<div class="ui basic segment">
</div>
</div>
<div class="eight wide column">
<div class="ui segment">
<form class="ui form" onSubmit={handleSubmit}>
    <div class="ui one column ">
    <div >
        <div class="one field">
            <div class="field">
            <label>Username</label>
            <input value= {username} type="text" name="username" placeholder="username" required onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div class="field">
            <label>Password </label>
            <input value= {password} type="text" name="password" placeholder="password"required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </div>
        <button class="ui button" type="submit">Login</button>
        </div>
    </div>
</form>
</div>
</div>
<div class="column">
<div class="ui basic segment">
</div>
</div>
</div>



    )
    }

export default SignIn;