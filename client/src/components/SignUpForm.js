import React, { useState } from "react";

function SignUpForm({ setUser, setErrors }) {
    const initialData = {
        name:'',
        username: '',
        email:'',
        password:'',
        password_confirmation: '',
        bio:'',
        seniority:'2',
        location_zip:'',
        location_name:'',
        company:'',
        logo: '',
        photo: '',
        manager_email:'',
        dr_email: '',
    }

const [formData, setFormData] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

    fetch("/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then(res => {
            if (res.ok){
                res.json().then(user => setUser(user))
            } else {
                res.json().then(errors => setErrors(errors.errors))
            }
        })
        // .then(onMeanieSubmit)
        .then(setFormData(initialData))
}


return (
<div class="ui equal width grid">
<div class="column">
<div class="ui basic segment">
</div>
</div>
<div class="eight wide column">
    <div class="ui segment">
    <form class="ui form" onSubmit={handleFormSubmit}>
    <div class="ui one column">
    <div >
        <div class="one field">
            <div class="field">
            <label> Name</label>
            <input value= {formData.name} type="text" name="name" placeholder="Name" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label> Username</label>
            <input value= {formData.username} type="text" name="username" placeholder="Username" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Email address </label>
            <input value= {formData.email} type="text" name="email" placeholder="Email address" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Password </label>
            <input value= {formData.password} type="text" name="password" placeholder="Password" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Password Confirmation </label>
            <input value= {formData.password_confirmation} type="text" name="password_confirmation" placeholder="Confirm Password"  onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Bio </label>
            <input value= {formData.bio} type="text" name="bio" placeholder="About me" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Zip Code </label>
            <input value= {formData.location_zip} type="number" name="location_zip" placeholder="Zip Code" onChange={handleFormChange} />
            </div>
            <div class="field">
            <label>City</label>
            <input value= {formData.location_name} type="text" name="location_name" placeholder="City" onChange={handleFormChange} />
            </div>
            <div class="field">
            <label>company </label>
            <input value= {formData.company} type="text" name="company" placeholder="Company name" onChange={handleFormChange}  />
            </div>
            <div class="field">
            <label>Company Logo</label>
            <input value= {formData.logo} type="text" name="logo" placeholder="Logo" onChange={handleFormChange}  />
            </div>
            <div class="field">
            <label>Photo</label>
            <input value= {formData.photo} type="text" name="photo" placeholder="Photo" onChange={handleFormChange}  />
            </div>
            <div class="field">
            <label>Manager's Email Address</label>
            <input value= {formData.manager_email} type="text" name="manager_email" placeholder="Manager's email" onChange={handleFormChange}  />
            </div>
            <div class="field">
            <label>Direct Report's Email Address</label>
            <input value= {formData.dr_email} type="text" name="dr_email" placeholder="Direct report's email" onChange={handleFormChange}  />
            </div>
        </div>
        <button class="ui button" type="submit">Submit</button>
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

export default SignUpForm;


