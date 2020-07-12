import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from '../../common/reducer';
import log from '../../common/middlewire/log';
import stateValidator from '../../common/middlewire/stateValidator';


export default (req) => {

    // Initial State Setting
    const initialState = { };

    //MiddleWare Setting
    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: { cookie: req.get('cookie') || '' }
      });
    const middleware = [thunk.withExtraArgument(axiosInstance), log, stateValidator];


    //Store Creation
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
    
    return store;
};

