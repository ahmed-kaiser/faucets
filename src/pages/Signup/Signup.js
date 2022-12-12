import React from 'react';
import RegisterForm from '../../sharedComponent/RegisterForm';

const Signup = () => {
    return (
        <RegisterForm title="Sign Up" message="Already have an account?" link="/login" />
    );
};

export default Signup;