import axios from 'axios';
import {modifyLocalStorageSetting} from '../components/template/Function_Common';
import {AUTH_EVENT} from '../../../common/Types';

//This is as exact as signupAction, which tells you what's going under the hood and why it is different then signoutAction
export const signinAction = (signinForm, callback) => async (dispatch: AUTH_EVENT => void, getState: any, api:any)=>{

    const url = '/authentication';
    let res;
    console.log("Current State :", getState());

    try {
        res = await api.post(url, signinForm);

        dispatch({
            type: 'auth_user',
            payload: res.data.data.jwt,
            isAuthenticated: true
        });
        setAuthTokenToLocalStorage(res.data.data.jwt);
        callback();
    } catch(e) {
        console.log('Login failed with following reason: ',e)
        dispatch({
            type: 'auth_error',
            payload: 'Invalid login credential'
        });
    }
}



export const signupAction = (signupForm, callback) => {

    return async function(dispatch: AUTH_EVENT => void, getState: any, api:any){

    try
    {
        //const response = await axios.post(`${process.env.AUTH_API_URL}/signup`, signupForm);
        dispatch({
            type: 'auth_user',
            payload: 'TestTokenByYoogesh',                          //response.data.token
            isAuthenticated: true
        });
        setAuthTokenToLocalStorage('TestTokenByYoogesh');          //response.data.token 
        callback();

    }
    catch(error){
        dispatch({
            type: 'auth_error',
            payload: `Signup failed!! Reason: ${error}`
        });

    }
}
}


//You cannot dispatch more then one action from here since you are returning Object here (Unlike function above. Make sure Thunk gives you an option to return function which is not possible in promise) 
export const signoutAction = () => {
        setAuthTokenToLocalStorage(null); 
        return ({ 
            type: 'auth_user',
            payload: null,
            isAuthenticated: false
        });
}


const setAuthTokenToLocalStorage = tokenValue => modifyLocalStorageSetting('jwtToken', tokenValue, false);


