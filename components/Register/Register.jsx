import './Register.css'

const Register = () => {

    return (
        <>
        <div className="register-container">
            <h1>Registration Form</h1>
            <div className = "input-container">
                <div className ="input-row">
                    <label for="username" class="label">Username:</label>
                    <input type="text" id="username" placeholder="username" autocomplete="off"/> 
                </div>
                <div className ="input-row">
                    <label for="password" class="label">Password:</label>
                    <input type="text" id="password" placeholder="password" autocomplete="off"/>
                </div>
                <div className ="input-row">
                    <label for="role" class="label">Role:</label>
                    <input type="text" id="role" placeholder="role" autocomplete="off"/>
                </div>
                <button id="submit-btn">Submit</button>
                <div id="status" className="hidden">
                    PLACEHOLDER
                </div>
            </div>
        </div>           
        </>
    );

}

export default Register;