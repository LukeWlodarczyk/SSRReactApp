import { FETCH_CURRENT_USER } from '../actions/types';

export default (state = null, action) => {
	console.log(action.payload);
	switch (action.type) {
		case FETCH_CURRENT_USER:
			return;
		default:
			return state;
	}
};
