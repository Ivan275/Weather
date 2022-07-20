import React, { useState } from 'react';
import { VERIFY_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

import SignInForm from './form/SignInForm';

function SignIn({setUser}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyUser, { error }] = useMutation(VERIFY_USER_MUTATION);
    const [errors, SetErrors] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await verifyUser({
          variables: {
            email: email,
            password: password,
          },
        });
        
        if(!response.data.verifyUser){
            // navigate('/search');
            console.log("erorr=:", response);
            SetErrors("User email or password is incorrect!");
            return;
        }
        navigate("/search");
        console.log("reponse:", response);
        localStorage.setItem('token',response.data.verifyUser);
        setUser(response.data.verifyUser);

        if (error) {
          setUser(error);
        };
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <SignInForm
            handleEmail = {handleEmail} 
            handlePassword = {handlePassword}
            handleSubmit = {handleSubmit} 
            errors = {errors}
            />
        </>
    );
}

export default SignIn;