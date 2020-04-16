const initState = {
  authError: null,
};

//here we will manipulate the state when we will have data
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('Login success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
      case 'SINGUP_SUCCESS':
        console.log('signup success')
        return{
          ...state,
          authError:null
        }
        case 'SIGNUP_ERROR':
          console.log("singup error")
          return{
            ...state,
            authError:action.err.message
          }
    default:
      return state;
  }
};
export default authReducer;
