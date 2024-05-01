import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import { AuthContext } from "../Components/Providers/AuthProviders";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname)
    if(loading) {
        return <span className="loading loading-bars loading-lg text-center"></span>
    }
    
    if(user){
        return children;
    }
    if(location?.pathname === '/addCraftItem'){
        toast.warn('Sign in first')
    }
    return <Navigate to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;