import { USER_REG } from '../action/userreg';

initialState = {
    user: [],
    isRegistered: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_REG:
            return {
                user: action.user,
                isRegistered: action.isRegistered
            }
        default:
            return state;
    }
} 