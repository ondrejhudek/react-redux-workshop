import { createStore } from 'redux';

const initialState = {};

const addMemberAction = () => ({});

const addMemberReducer = () => ({});

const store = createStore(addMemberReducer, initialState);

const totalMembersSelector = () => 0;

export { store, addMemberAction, addMemberReducer, totalMembersSelector };