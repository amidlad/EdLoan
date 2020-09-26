import { SEARCHED_USER_LIST, USER_LIST,CLEAR_USER_LIST } from '../action/userlist';

initialState = {
    userList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST:
            return {
                ...state,
                userList: action.userList
            }
        case SEARCHED_USER_LIST:
            return {
                ...state,
                userList: action.searchedUserList
            }
        case CLEAR_USER_LIST:
            return {
                userList: action.userList
            }
        default:
            return state;
    }
} 