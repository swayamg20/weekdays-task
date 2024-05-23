import { combineReducers } from 'redux';
import { jobData } from '../Assets/jobs'; 
import { SET_FILTER } from './actions';

// Define the initial state
const initialJobState = {
  jobs: jobData(), 
  filters: {
    minExperience: null,
    companyName: '',
    location: '',
    remoteOnsite: '',
    role: '',
    minBasePay: null,
  },
};

const jobReducer = (state = initialJobState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  jobState: jobReducer,
});

export default rootReducer;
