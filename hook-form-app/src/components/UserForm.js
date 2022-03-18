import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    

    return (
        <div>
            <br/>
            <br/>
            <form>
                <div>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type='text' onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password: </label>
                    <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} />
                </div>
            </form>
            <br/>
            <hr/>
            <br/>
            <h1>Form Data</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default UserForm;