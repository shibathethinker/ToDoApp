import {combineReducers} from 'redux';

import createTaskReducer from './createTaskReducer';
import generateId from './generateId';


export default combineReducers({

fullData:createTaskReducer,
latestId:generateId
})