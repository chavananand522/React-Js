import React, { useState } from 'react'

const MultipleFrom = () => {
    // A single state obj that holds all the form feilds(formdata)
    const [formdata, setformdata] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    }

    return (
        <div>
            <h1>Multiple Input Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Name: </label>
                <input
                    type='text'
                    name='name'
                    value={formdata.name}
                    onChange={handleChange}
                />

                <br></br><br></br>

                <label>Email: </label>
                <input
                    type='email'
                    name='email'
                    value={formdata.email}
                    onChange={handleChange}
                />

                <br></br><br></br>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MultipleFrom