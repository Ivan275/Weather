import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import SignUpForm from './form/SignUpForm';

function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });
    if(!response.data.createUser.id){
      setSuccess("You have successfully sign up!")
    }
    if (error) {
      setErrors(error)
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);

  }
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <SignUpForm 
      handleSubmit={handleSubmit} 
      handleFirstName={handleFirstName} 
      handleLastName={handleLastName} 
      handleEmail = {handleEmail} 
      handlePassword = {handlePassword}
      errors = {errors}
      success = {success}
      />
    </>
  );
}

export default SignUp;