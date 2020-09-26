import React from 'react';
import USERS from '../../model/user-item-data';

export const USER_LIST = "USER_REG";
export const SEARCHED_USER_LIST = "SEARCHED_USER_LIST";
export const CLEAR_USER_LIST = "CLEAR_USER_LIST";


export const fetchUserListing = () => {
    return dispatch => {
        dispatch({
            type: USER_LIST,
            userList: USERS
        })
    }
}