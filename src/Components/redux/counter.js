// const userReducer = (state={}, action) => {
//     switch(action.type){
//         case 'CHANGE_USER': {
//             state = {...state, name: action.payload};
//             break;
//         }
//         case 'CHANGE_AGE': {
//             state = {...state, age: action.payload};
//             break;
//         }
//     }
//     return state;
// };
// const tweetReducer = (state=[], action) => {
//     return state;
//
//
// };
// const reducers = combineReducers({
//     user: userReducer,
//     tweets: tweetReducer,
// });
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'ADD': {
            state = state + action.payload;
            break;
        }
        case 'DEC': {
            state = state - action.payload;
            break;
        }
        case 'ERR': {
            throw new Error("RIP PC")
        }
    }
    return state;
};
const reducer2 = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_USERS_START':{
            break;
        }
        case 'RECEIVE_USERS':{
            break;
        }
        case 'FETCH_USERS_ERROR':{
            break;
        }
    }

    return state;
};


const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer2, middleware);

store.subscribe(() => {
    console.log('Store has changed', store.getState())
});

store.dispatch((dispatch) => {
    dispatch({type: 'FETCH_USERS_START'});
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response) => {
            dispatch({type: 'RECEIVE_USERS', payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'FETCH_USERS_ERROR', payload: err})
        })
    //do something async
});



// const logger = function(store){
//     return function(next){
//         return function (action) {
//             console.log('action fired' , action);
//             next(action);
//         }
//     }
// };
// const err = function(store){
//     return function(next){
//         return function (action) {
//             try {
//                 next(action);
//             } catch(element){
//                 console.log('Error has occurred', element)
//             }
//         }
//     }
// };
// store.dispatch({type: 'ADD', payload: 2 });
// store.dispatch({type: 'DEC', payload: 17});
// store.dispatch({type: 'ADD', payload: 0});