import React, { useState } from 'react'

function MyForm() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const handlesubmit = (event) => {
        //preventDefault() method is used to prevent the default action of browser on submission of form (reload the page)
        event.preventDefault();
        console.log("Name :", name);
        console.log("Email :", email);

    }
    return (
        <div>
            <h1>Controlled Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} />

                <br></br><br></br>

                <label>Email: </label>
                <input type='email' value={email} onChange={(e) => setemail(e.target.value)} />

                <br></br><br></br>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MyForm