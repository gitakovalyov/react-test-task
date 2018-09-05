import {combineReducers} from 'redux';
import testTask from './reducers/TestTask';

const reducers = {
  testTask,
};

export default combineReducers(reducers);
