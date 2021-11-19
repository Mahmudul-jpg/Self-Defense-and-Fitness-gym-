import React from 'react';
import './Form.scss'

const SignUp = () => {

    return (
        <div>
            <form className="form-style" onSubmit=''>
                <h1>Sign Up</h1>
                <h3>Please fill in this form to create an account for the membership</h3>
                <div>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter your Name' />
                </div>
                <br />
                <div>
                    <label>Email: </label>
                    <input type='email' placeholder='Enter your Email' />
                </div>
                <br />
                <div><label>Password: </label>
                    <input type='password' placeholder='create your password' /></div>
                <br />
                <div>
                    <label>Repeat Password: </label>
                    <input type='password' placeholder='repeat your password' />
                </div>

                <div>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <div>
                    <label>Choose your program </label>
                    <select >
                        <option value="">JIU JITSU</option>
                        <option value="">BOXING</option>
                        <option value="">WRESTLING</option>
                        <option value="">KICKBOXING</option>
                        <option value="">WEIGHT LIFTING</option>
                    </select>
                    <br />
                    <br />
                    <div className="btn">
                        <button type="submit" value='' className="btnOne" onClick=''> SUBMIT </button>

                        <button type="" value="" className="btnTwo" onClick=''>SIGN IN WITH GOOGLE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp


