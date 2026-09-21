import React, { useState } from 'react'

const FormValidation = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const handlesubmit = (event) => {
        event.preventDefault();
        if (!name | !email) {
            alert("Please fill the all the feilds")
        } else {
            console.log("Form Submitted!",{name,email});
        }
    }
    return (
        <div>
            <h1>Form Validation</h1>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} required />

                <br></br><br></br>

                <label>Email: </label>
                <input type='email' value={email} onChange={(e) => setemail(e.target.value)} required />

                <br></br><br></br>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation