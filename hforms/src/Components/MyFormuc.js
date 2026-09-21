import React, { useRef } from 'react'

function MyFormuc() {
    const nameref = useRef();
    const emailref = useRef();
    const handlesubmit = (event) => {
        event.preventDefault();
        console.log("Name :", nameref.current.value);
        console.log("Email :", emailref.current.value);
    }
    
    return (
        <div>
            <h1>Uncontrolled From</h1>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input type='text' ref={nameref} />

                <br></br><br></br>

                <label>Email: </label>
                <input type='email' />

                <br></br><br></br>

                <button type='submit' ref={emailref}>Submit</button>
            </form>
        </div>
    )
}

export default MyFormuc