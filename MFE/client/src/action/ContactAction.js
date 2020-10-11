import axios from 'axios';
import uuid  from 'uuid';
require('babel-polyfill');
import {GET_CONTACTS, GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../../../common/Types';
import allContactTestData from '../components/contactManager/__fixtures__/allContactTestData.json'; 


export const getAllContactAction = (source) => async (dispatch, getState, api) => {
    
    try
    {
        const url = '/user/all';
        let res;


        //if Running on Test Environment
        if(source !== 'server' && JSON.parse(localStorage.getItem('settings')).runningOnTestEnvironment === true) {
            res = allContactTestData;
        }
        //Else If Running on Production Environment
        else {
            res = await api.get(url).catch((error) => {
                if(error && error.response){
                    console.log("Fetching contact failed...!!" + error) ;
                }
                return error;
            });
        }
       6+
        //finally dispatch the response
        dispatch({
            type: GET_CONTACTS,
            payload: res.data.data,
            dynamicId:res.data.data[0].uid
        });
    }
    catch(e)
    {
        console.log("SomeThing went wrong while calling getAllContact() method...!! Check whether you are in test environment..!!" + e);
    }
 };

 


export const getContactAction = uid => async (dispatch, getState, api) => {

    try
    {
        const url = `/user?guid=${uid}`;
        const res = await api.get(url);        

        dispatch({
            type: GET_CONTACT,
            payload: res.data.data
          });        
    }
    catch(e)
    {
        console.log("Fetching a particular contact failed...!!") 
    }

 };




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





 export const editContactAction = contact => async dispatch =>  {

    try
    {
        const { uid, firstName, lastName, username } = contact;
        console.log("===", uid);
        console.log("===", firstName);
        console.log("===", lastName);
        console.log("===", username);
        const editedContact = {
            firstName,                //firstName : firstName
            lastName,                 // lastName : lastName
            username                  // username : username
        }

        const url = `${process.env.GO_SERVICE_BASE_URL}/user/${uid}`;
        const res = await axios.put(url, editedContact);
    
        dispatch({
            type: EDIT_CONTACT,
            payload: res.data.data
          });

    }
    catch(e)
    {
        console.log("Editing a contact failed...!!") 
    }

 };


 export const deleteContactAction = id => async dispatch =>  {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try
    {
        // we are not doing anything by response since it is returning empty object always, we don't even need to asign it to variable
        await axios.delete(url);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
          });
    }
    catch(e)
    {
        //Since the database is not deleting our added contacts, we are forcefully deleting evenif we get denied response from ajax call
        console.log("deletion failed...!!However still deleting from store...")
        dispatch({
            type: DELETE_CONTACT,
            payload: id
          });

    }
 };
