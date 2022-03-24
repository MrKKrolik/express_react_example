import React, { Component, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { publicRoutes } from '../routes';
const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>   
            )}
            <Redirect to={'/users'}/>
        </Switch>
    );
};

export default AppRouter;