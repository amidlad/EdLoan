import { SEARCHED_USER_LIST, USER_LIST, CLEAR_USER_LIST } from '../action/userlist';

const initialState = {
    userList: []
};

export default (state = initialState, action) => {

    switch (action.type) {

        case USER_LIST:
            console.log(" USER_LIST Listing == ", action.userList);
            return {
                ...state,
                userList: action.userList
            }
        case SEARCHED_USER_LIST:
            console.log(" SEARCHED_USER_LIST Listing == ", action.userList);
            return {
                ...state,
                userList: action.searchedUserList
            }
        case CLEAR_USER_LIST:
            console.log(" CLEAR_USER_LIST Listing == ", action.userList);
            return {
                userList: action.userList
            }
        default:
            return state;
    }
} 