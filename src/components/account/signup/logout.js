import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import { userLogOut } from '../../store/reducers/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const clientId = '782570558222-gho8alkm051cc4ke0oatc695gar1h3ji.apps.googleusercontent.com';

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutSuccess = () => {
        googleLogout();
        dispatch(userLogOut());
        navigate(-1); // Navigate back to the previous page
    };
    useEffect(() => {
        navigate(-1)
    }, [])
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="App">
                <div>
                    <button onClick={handleLogoutSuccess}>Logout</button>

                    {/* <googleLogout
                        onLogoutSuccess={handleLogoutSuccess}
                        buttonText="Logout"
                    /> */}
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Logout;