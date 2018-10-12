import { createStore } from 'redux';
import { createSelector } from 'reselect';

const initialState = {
  courses: [
    {
      name: 'Redux',
      members: []
    }
  ]
};

const addMemberAction = (courseName, memberName) => ({
  type: 'ADD_MEMBER',
  payload: {
    courseName,
    memberName
  }
});

const addMemberReducer = (state, { type, payload }) =>
  type === 'ADD_MEMBER'
    ? {
        ...state,
        courses: state.courses.map(
          course =>
            course.name === payload.courseName
              ? {
                  ...course,
                  members: [...course.members, payload.memberName]
                }
              : course
        )
      }
    : state;

const coursesSelector = state => state.courses;
const membersSelector = createSelector(coursesSelector, courses =>
  courses.map(({ members }) => members)
);
const totalMembersSelector = createSelector(membersSelector, members =>
  members.reduce((acc, next) => acc + next.length, 0)
);

const store = createStore(addMemberReducer, initialState);

export { store, addMemberAction, addMemberReducer, totalMembersSelector };
