import React from 'react';
import useAuth from '../../hook/useAuth';
import { CircularProgress } from '@mui/material';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress style={{textAlign:'center'}}/> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;