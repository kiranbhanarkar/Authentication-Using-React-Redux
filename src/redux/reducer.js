import { SAVE_USER } from './action'

const initialState = {
	user: {}
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case SAVE_USER: 
			return {
				...state,
				user: action.payload
			}
			default:
				return state
	}
}

export default userReducer