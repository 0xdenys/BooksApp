import * as types from './types';

const initState = {
  user: {},
  isOnboardingComplete: false,
  stayLogged: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_FIELD_IN_STORE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
