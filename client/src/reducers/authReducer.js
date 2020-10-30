import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";
const initialState = {
    isSignedIn: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true };
        case SIGN_OUT:
            return { ...state, isSignedIn: false };

        default:
            return state;
    }
};
export default authReducer;
