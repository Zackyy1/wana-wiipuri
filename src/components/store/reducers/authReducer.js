

const initState = {
    authError: null,

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("LOGIN_FAILED", action);
            return {
                ...state,
                authError: 'Login failed'
            };
            

        case "LOGIN_SUCCESS":
            console.log("LOGIN_SUCCESS", action);
            return {
                ...state,
                authError: null,
            };

        case "SIGNOUT_SUCCESS":
            console.log("SIGNOUT_SUCCESS");
            return state;

        case "SIGNUP_SUCCESS":
            console.log("SIGNUP_SUCCESS");
            return {
                ...state,
                authError: null,
            };

        case "SIGNUP_ERROR":
            console.log("SIGNUP_ERROR", action.err);
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer