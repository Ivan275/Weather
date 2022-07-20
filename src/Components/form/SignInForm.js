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

const LoginForm = ({handleSubmit, handleEmail, handlePassword, errors, ...props}) => {

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Sign In</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>                       
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
							<FormButton onClick={handleSubmit}>Sign In</FormButton>
						</FormWrapper>
						{errors && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								style={{color:"red"}}
							>
								{errors}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default LoginForm;