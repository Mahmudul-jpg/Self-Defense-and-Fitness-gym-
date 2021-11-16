import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <h1>Sign Up</h1>
                <h3>Please fill in this form to create an account for the membership</h3>
                <label>Name:</label>
                <input type='text' placeholder='Enter your Name' />
                <label>Email:</label>
                <input type='email' placeholder='Enter your Email' />
                <label>Password:</label>
                <input type='password' placeholder='create your password' />
                <label>Repeat Password:</label>
                <input type='password' placeholder='repeat your password' />
                <label>Choose your program</label>
                <select >
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                </select>
                {/* <input type="submit" value="Submit" /> */}
                {/* <input type='text' placeholder='Enter your Name' /> */}
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </form>
        </div>
    )
}

export default SignUp


