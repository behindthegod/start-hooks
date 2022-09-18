import React from 'react';

import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth');
    const handleLogOut = () => localStorage.removeItem('auth');
    const handleLogin = () =>localStorage.setItem('auth', 'token');
    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                isAuth={isLogin}
            />
        </CardWrapper>
    );
};

export default withFunctions;