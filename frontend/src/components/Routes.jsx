import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Login from '../pages/Login';
import useUserInfo from '../pages/useToken';
import PermissionScreen from '../pages/PermissionScreen';
import ProductScreen from '../pages/ProductScreen';
import EditProductScreen from '../pages/EditProductScreen'
import VariationScreen from '../pages/VariationScreen'
import AddNewUserScreen from '../pages/AddNewUserScreen';
import CategoryScreen from '../pages/CategoryScreen';

const Routes = () => {
  const { user, setUser } = useUserInfo();
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/login" component={Login} />

      <PrivateRoute path="/" exact component={Dashboard} />

      <PrivateRoute
        path="/permissions/:id"
        exact
        component={PermissionScreen}
      />
      <PrivateRoute path="/products" exact component={ProductScreen} />

      <PrivateRoute path="/addproduct" exact component={EditProductScreen} />
      <PrivateRoute path="/product/:id" exact component={EditProductScreen} />
      <PrivateRoute path="/variations/:id/:variationId" exact component={VariationScreen} />
      <PrivateRoute path="/variations/:id" exact component={VariationScreen} />
      <PrivateRoute path="/addnewuser" exact component={AddNewUserScreen} />
      <PrivateRoute path="/edituser/:id" exact component={AddNewUserScreen} />
      <PrivateRoute path="/categories" exact component={CategoryScreen} />
    </Switch>
  );
};

export default Routes;
