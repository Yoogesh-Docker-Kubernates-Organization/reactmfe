import axios from 'axios';
import uuid  from 'uuid';
require('babel-polyfill');
import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../../../common/Types';
import allContactTestData from '../components/contactManager/__fixtures__/allContactTestData.json'; 

/**
 * Get all users
 */
export const getAllContactAction = (source) => async (dispatch, getState, api) => {
    try {
        const url = '/user/all';
        let res;

        if(source !== 'server' && JSON.parse(localStorage.getItem('settings')).runningOnTestEnvironment === true) {
            //if Running on Test Environment
            res = allContactTestData;
        } else {
            //If Running on Production Environment
            res = await api.get(url).catch((error) => {
                if(error && error.response){
                    console.log("Fetching contact failed...!!" + error) ;
                }
                return error;
            });
        }
        //finally dispatch the response
        dispatch({
            type: GET_CONTACTS,
            payload: res.data.data,
            dynamicId:res.data.data[0].uid
        });
    } catch(e) {
        console.log("SomeThing went wrong while calling getAllContact() method...!! Check whether you are in test environment..!!" + e);
    }
 };

 /**
 * Find user by Id
 */
export const getContactAction = (uid, username) => async (dispatch, getState, api) => {
    try {
        let url = `/user?guid=${uid}`;
        if(username.includes('@')){
            url = `/user?username=${username}`;
        }
        const res = await api.get(url);        

        dispatch({
            type: GET_CONTACT,
            payload: res.data.data
          });        
    } catch(e) {
        console.log("Fetching a particular contact failed...!!") 
    }
 };

 /**
  * Update user
  */
 export const editContactAction = contact => async (dispatch, getState, api) =>  {
     try {
         const { uid, firstName, lastName, username } = contact;
         const editedContact = {
             firstName,                //firstName : firstName
             lastName,                 // lastName : lastName
             username                  // username : username
            }
        /**
         * @warning You should never use like below as it will give the CORS error @warning
         * const url = `${process.env.GO_SERVICE_BASE_URL}/user/${uid}`;
         * const res = await axios.patch(url, editedContact); 
         */
        
        const url = `/user/${uid}`;
        const res = await api.patch(url, editedContact); 
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data.data
          });
    } catch(e) {
        console.log("Editing a contact failed...!!") 
    }
 };

 /**
  * Delete user
  */
 export const deleteContactAction = (uid, username) => async (dispatch, getState, api) =>  {
    const url = `/users/${uid}?username=${username}`;

    try {
        // we are not doing anything by response since it is returning empty object always, we don't even need to asign it to variable
        await api.delete(url);
        dispatch({
            type: DELETE_CONTACT,
            payload: uid
          });
    } catch(e) {
        console.log("deletion failed...!!However still deleting from store..." + e)
    }
 };

 /**
  * 
  * Create user
  */
 export const addContactAction = (contact) => async dispatch =>  {

    try
    {
        const { name, phone, email } = contact;
        const newContact = {
            id: uuid(),             //Generating random uuid
            name,                  //name : name
            phone,                 // phone : phone
            email                  // email : email
        };

        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await axios.post(url, newContact);
    
        dispatch({
            type: ADD_CONTACT,
            payload: res.data.data
          });

    }
    catch(e)
    {
        console.log("Adding a contact failed...!!") 
    }

 };