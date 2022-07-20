import React from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import { Container } from '../../globalStyles';

const Form = ({handleSubmit, handleEmail, handlePassword, errors, ...props}) => {

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Sign Up</FormTitle>
						<FormWrapper>
                            <FormInputRow>
                                <FormLabel>First Name</FormLabel>
                                <FormInput 
                                    type= 'name'
                                    placeholder={`Enter Name`}
                                    autoComplete="name"
									onChange={props.handleFirstName}
                                />
                            </FormInputRow>

                            <FormInputRow>
                                <FormLabel>Last Name</FormLabel>
                                <FormInput 
                                    type= 'name'
                                    placeholder={`Enter Name`}
                                    autoComplete="name"
									onChange={props.handleLastName}
                                />
                            </FormInputRow>
                            
                            <FormInputRow>
                                <FormLabel>Email</FormLabel>
                                <FormInput 
                                    type= 'email'
                                    placeholder={`Enter Email`}
                                    autoComplete="email"
									onChange={handleEmail}
                                />
                            </FormInputRow>
                            <FormInputRow>
                                <FormLabel>Password</FormLabel>
                                <FormInput 
                                    type= 'password'
                                    placeholder={`Enter Password`}
                                    autoComplete="password"
									onChange={handlePassword}
                                />
                            </FormInputRow>
							<FormButton onClick={handleSubmit}>Sign Up</FormButton>
						</FormWrapper>
						{errors && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{errors}
							</FormMessage>
						)}
                        {props.success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{props.success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;