import { store, addMemberAction, addMemberReducer, totalMembersSelector } from '../redux';

test('Add member action creates correct action object', () => {
	expect(addMemberAction('courseName', 'memberName')).toEqual({
		type: 'ADD_MEMBER',
		payload: {
			courseName: 'courseName',
			memberName: 'memberName'
		}
	});
});

describe('Add member reducer', () => {
	test('ignores other action types and return previous state', () => {
		const state = {};
		expect(addMemberReducer(state, {})).toBe(state);
	});

	test('adds new member into correct course', () => {
		const state = {
			courses: [
				{
					name: 'Redux',
					members: []
				}
			]
		};
		expect(addMemberReducer(state, addMemberAction('Redux', 'Mr. Mock'))).toEqual({
			courses: [
				{
					name: 'Redux',
					members: ['Mr. Mock']
				}
			]
		});
	});
});

test('Store updates correctly on ADD_MEMBER action', () => {
	store.dispatch(addMemberAction('Redux', 'Mr. Mock'));
	expect(store.getState()).toEqual({
		courses: [
			{
				name: 'Redux',
				members: ['Mr. Mock']
			}
		]
	});
});

test('Total members selector return count of all courses members (not unique)', () => {
	const state = {
		courses: [
			{
				name: 'Redux',
				members: ['Mr. Mock']
			},
			{
				name: 'Reselect',
				members: ['Mr.', 'Mock']
			}
		]
	};
	expect(totalMembersSelector(state)).toBe(3);
});