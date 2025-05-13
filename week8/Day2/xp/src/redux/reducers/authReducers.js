const initialState = {
    isAuthenticated: false,
    currentUser: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          currentUser: action.payload,
        };
      case 'LOGOUT':
        return initialState;
      case 'REGISTER':
        return state; 
      default:
        return state;
    }
  };
  