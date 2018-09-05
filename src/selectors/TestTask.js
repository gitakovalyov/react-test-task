import { createSelector } from 'reselect'

const taskState = state => state.testTask;

const selectItems = createSelector(
  [ taskState ],
  (state) => state.items
);

export {
  selectItems
};