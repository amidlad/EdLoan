import React from 'react';
import USERS from '../../model/user-item-data';

export const USER_LIST = "USER_LIST";
export const SEARCHED_USER_LIST = "SEARCHED_USER_LIST";
export const CLEAR_USER_LIST = "CLEAR_USER_LIST";


export const fetchUserListing = () => {
    console.log("fetchUserListing")
    return dispatch => {
        dispatch({
            type: USER_LIST,
            userList: USERS
        });
    };
}

export const searchedUserListing = (userListing) => {
    console.log("searchedUserListing  userListing == ", userListing);
    return dispatch => {
        dispatch({
            type: SEARCHED_USER_LIST,
            searchedUserList: userListing
        });
    };
}