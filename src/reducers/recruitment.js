import {
    RECRUITMENT_PAGE_LOADED,
    RECRUITMENT_PAGE_UNLOADED,
} from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case RECRUITMENT_PAGE_LOADED:
            console.log('action start');
            console.log(action.payload);

            return {
                ...state,
                recruitment1: {
                    title: 'test'
                },
                recruitment: action.payload,
            }
        default:
            return state
    }
};
