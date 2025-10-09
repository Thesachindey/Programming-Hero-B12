import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();//this hook show the main problem on display
    return (

        <div>
            <h1>404 error!!</h1>
            <h1>
            {error.message}
            </h1>

        </div>
    );
};

export default ErrorPage;