import {combineReducers} from 'redux';


const appReducer = combineReducers({});


const initialState = appReducer({});

const rootReducer = (state, action) => {
    if(action.type === 'RESET'){
        state = initialState;
    }
    return appReducer(state, action)
}

export default rootReducer;