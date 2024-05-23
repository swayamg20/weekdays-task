import { combineReducers } from 'redux';
import { jobData } from '../Assets/jobs'; // Import the jobData function
import { SET_FILTER } from './actions';

// Define the initial state
const initialJobState = {
  jobs: jobData(), // Call jobData to get the job array, not the function itself
  filters: {
    minExperience: null,
    companyName: '',
    location: '',
    remoteOnsite: '',
    role: '',
    minBasePay: null,
  },
};

// Define the job reducer
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
