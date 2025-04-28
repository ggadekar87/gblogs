import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../store/actions/actions';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import "./signup.css"
const clientId = '782570558222-gho8alkm051cc4ke0oatc695gar1h3ji.apps.googleusercontent.com';
function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleSignUp = async () => {
        try {
        } catch (error) {
            console.error('Error during Google Sign-Up:', error.message);
            alert('Error during Google Sign-Up, please try again.');
        }
    };
    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
        dispatch(loginUser(response));
        navigate("/");
        // You can now use the response to authenticate your user in your backend
    };

    const handleLoginFailure = (error) => {
        console.log('Login Failed:', error);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <GoogleOAuthProvider clientId={clientId}>
                <div className="SignUp">
                    <h2>Google Login</h2>
                    <GoogleLogin className="LoginElement"
                        onSuccess={handleLoginSuccess}
                        onFailure={handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </GoogleOAuthProvider>
        </div>
    );
}

export default SignUp;
