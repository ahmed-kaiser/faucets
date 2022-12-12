import React from 'react';
import RegisterForm from '../../sharedComponent/RegisterForm';

const Login = () => {
    return (
        <RegisterForm title="Log In" message="Don't have an account?" link="/signup" />
    );
};

export default Login;